import content from '../../../assets/content/content.json'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import styles from './GrantModal.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { getRoleLabel } from '../../../utils/helper'

export default function GrantModal(props) {
    const {
      isOpen,
      setIsOpen,
      adminUserList,
      standardUserList
    } = props
    const {
      rowSelected,
      setRequestList,
      setOriginalResult,
      setRowSelected,
    } = useContext(AccessContext)
    const [rejectReason, setRejectReason] = useState('')
    const isMultipleSelected = rowSelected.length > 1
    const modalTitle = isMultipleSelected ?
    content.accessGrantModal.titleMultiple
    : content.accessGrantModal.title
    const modalBtnText = isMultipleSelected ?
      content.accessGrantModal.multipleBtnText
      : content.accessGrantModal.btnText
    const successMessage = content.accessGrantModal.successMessage
    const failureMessage = content.accessGrantModal.failureMessage
      // TODO:Move refetch function to context

    const onSuccessAction = (result) => {
      setRequestList(result)
      setOriginalResult(result)
      setRowSelected([])
      setIsOpen(false)
      setRejectReason('')
    }
    function submitRequests() {
      if(rowSelected.length > 0){
        const requestIds = rowSelected.map((item) => item.requestId);
        const emails = rowSelected.map((item) => item.email);
        const givenNames = rowSelected.map((item) => item.givenName);
        const lastNames = rowSelected.map((item) => item.lastName);
        const requestedRoles = rowSelected.map((item) => item.requestedRole);

        const body = {
          action: 'Granted',
          requestIds,
          emails,
          givenNames,
          lastNames,
          requestedRoles,
          rejectionReason: rejectReason
        }
        HttpRequest.updateAccessRequest(body)
          .then((response) => {
              toast.success(`${rowSelected.length} ${successMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgSuccess}`,
                toastId: 'grant-access-success'
              });
              HttpRequest.getRequestList('pending')
              .then((response) => {
                const result = response?.status === 204 ? [] : response?.data
                onSuccessAction(result)
              })
              .catch((error) => {
                console.error(error)
                toast.error(` ${failureMessage}`, {
                  position: toast.POSITION.TOP_RIGHT,
                  className: `${styles.toastMsgFailure}`,
                  toastId: 'grant-access-failure'
                });
                setIsOpen(false)
              })
          })
          .catch((error) => {
              toast.error(` ${failureMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgFailure}`,
                toastId: 'grant-access-failure'
              });
              setIsOpen(false)
          })

      }
    }

    function formatConfirmationMessage() {
      let message
      if (rowSelected.length === 1) {
        message = `${content.accessGrantModal.bodyText} ${rowSelected[0].givenName} ${rowSelected[0].lastName}${content.accessGrantModal.requestFor} ${getRoleLabel(rowSelected[0].requestedRole)}?`
      }
      else if (rowSelected.length > 1) {
        message = `${content.accessGrantModal.bodyMultipleText} ${rowSelected.length} ${content.accessGrantModal.users}?`
      }
      return message
    }

    return (
        <div>
            <Modal
                modalHeader={modalTitle}
                modalId="access-grant-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1,
                    onClickHandler: () => submitRequests(),
                }}
                modalSecondaryBtn={{
                    text: `${content.accessGrantModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
              <div>
                <div>
                  {formatConfirmationMessage()}
                </div>
                <div>
                  {rowSelected.length > 1 ?
                    <div className={styles.users}>
                      {adminUserList?.length > 0 ?
                        <div className={styles.adminList}>
                          {content.accessGrantModal.supervisorAccess}
                          <ul className={styles.userList}>
                            {adminUserList}
                          </ul>
                        </div> 
                      : ''}
                      {standardUserList?.length > 0 ?
                        <div className={styles.standardList}>
                          {content.accessGrantModal.agentAccess}
                          <ul className={styles.userList}>
                            {standardUserList}
                          </ul>
                        </div> 
                      : ''}
                    </div>
                  : ''}
                </div>
              </div>
            </Modal>
        </div>
    )
}