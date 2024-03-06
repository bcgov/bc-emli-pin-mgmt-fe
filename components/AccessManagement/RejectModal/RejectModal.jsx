import content from '../../../assets/content/content.json'
import styles from './RejectModal.module.css'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext, useState } from 'react'
import TextArea from '../../TextArea'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getRoleLabel } from '../../../utils/helper'

export default function RejectModal(props) {
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
    const [rejectReason, setRejectReason] =useState('')
    const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)
    const isMultipleSelected = rowSelected.length > 1
    const modalTitle = isMultipleSelected ?
    content.accessRejectModal.titleMultiple
    : content.accessRejectModal.title
    const modalBodyText = rowSelected.length < 1 ?
    content.accessRejectModal.selectErrorMessage
    : (isMultipleSelected ?
      content.accessRejectModal.bodyMultipleText
      : content.accessRejectModal.bodyText)
    const modalBtnText = isMultipleSelected ?
      content.accessRejectModal.multipleBtnText
      : content.accessRejectModal.btnText
    const successMessage = content.accessGrantModal.successMessage
    const failureMessage = content.accessGrantModal.failureMessage
    const onReasonInputChange = (value) => {
      setRejectReason(value)
    }

    const onClose = () => {
      setRejectReason('')
      setIsOpen(false)
      setIsOpenConfirmation(false)
    }

    const onSuccessAction = (result) => {
      setRequestList(result)
      setOriginalResult(result)
      setRowSelected([])
      setIsOpen(false)
      setIsOpenConfirmation(false)
      setRejectReason('')
    }
    // TODO:Move refetch function to context
    function submitRejectRequests() {
      if(rowSelected.length > 0){
        const requestIds = rowSelected.map((item) => item.requestId);
        const emails = rowSelected.map((item) => item.email);
        const givenNames = rowSelected.map((item) => item.givenName);
        const lastNames = rowSelected.map((item) => item.lastName);
        const requestedRoles = rowSelected.map((item) => item.requestedRole);

        const body = {
          action: 'Rejected',
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
              toastId: 'reject-access-success'
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
                  toastId: 'reject-access-failure'
                });
                setIsOpen(false)
                setIsOpenConfirmation(false)
              })
          })
          .catch((error) => {
              toast.error(` ${failureMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgFailure}`,
                toastId: 'reject-access-failure'
              });
              setIsOpen(false)
              setIsOpenConfirmation(false)
          })

      }
    }

    function formatConfirmationMessage() {
      let message
      if (rowSelected.length === 1) {
        message = `${content.accessRejectConfirmationModal.oneChangeMessage} ${rowSelected[0].givenName} ${rowSelected[0].lastName}${content.accessRejectConfirmationModal.requestFor} ${getRoleLabel(rowSelected[0].requestedRole)} ${content.accessRejectConfirmationModal.accessForReason} "${rejectReason}"? ${content.accessRejectConfirmationModal.notificationMessage}`
      }
      else if (rowSelected.length > 1) {
        message = `${content.accessRejectConfirmationModal.multipleChangesMessage} ${rowSelected.length} ${content.accessRejectConfirmationModal.usersForReason} "${rejectReason}"?`
      }
      return message
    }

    function openConfirmationModal() {
      console.log(standardUserList)
      setIsOpen(false)
      setIsOpenConfirmation(true)
    }

    return (
        <div>
            <Modal
                modalHeader={modalTitle}
                modalId="access-reject-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1 || rejectReason === '',
                    onClickHandler: () => openConfirmationModal(),
                }}
                modalSecondaryBtn={{
                    text: `${content.accessRejectModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => onClose(),
                }}
            >
                <div className={styles.contentWrap}>
                  {modalBodyText}
                </div>
                {
                  rowSelected.length > 0 &&
                  <div className={styles.inputWrap}>
                    <TextArea
                      textAreaId='requestReason'
                      textAreaName={content.accessRejectModal.rejectTextAreaTitle}
                      isRequired
                      isValid={true}
                      value={rejectReason}
                      onChange={onReasonInputChange}
                      />
                  </div>
                }

                { isMultipleSelected &&
                  <span className={styles.footerText}>
                    {content.accessRejectModal.rejectTextAreaMessage}
                  </span>
                }
            </Modal>
            <Modal
                modalHeader={modalTitle}
                modalId="access-reject-modal"
                isOpen={isOpenConfirmation}
                setIsOpen={setIsOpenConfirmation}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1 || rejectReason === '',
                    onClickHandler: () => submitRejectRequests(),
                }}
                modalSecondaryBtn={{
                    text: `${content.accessRejectModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => onClose(),
                }}
            >
              <div>
                <div>
                  {formatConfirmationMessage()}
                </div>
                <div>
                  {rowSelected.length > 1 ?
                    <div>
                      <div className={styles.users}>
                        {adminUserList?.length > 0 ?
                          <div className={styles.adminList}>
                            {content.accessRejectConfirmationModal.supervisorAccess}
                            <ul className={styles.userList}>
                              {adminUserList}
                            </ul>
                          </div> 
                        : ''}
                        {standardUserList?.length > 0 ?
                          <div className={styles.standardList}>
                            {content.accessRejectConfirmationModal.agentAccess}
                            <ul className={styles.userList}>
                              {standardUserList}
                            </ul>
                          </div> 
                        : ''}
                      </div>
                      <div className={styles.confirmationModalMessage}>
                        {content.accessRejectConfirmationModal.notificationMessage}
                      </div>
                    </div>
                  : ''}
                </div>
              </div>
            </Modal>
        </div>
    )
}