import content from '../../../assets/content/content.json'
import styles from './DeactivateModal.module.css'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {UserManagementContext} from '../../../context/userManagementContext/UserManagementState'
import { useContext, useState } from 'react'
import TextArea from '../../TextArea'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function DeactivateModal(props) {
    const {
      isOpen,
      setIsOpen,
    } = props
    const {
      rowSelected,
      setUsersList,
      setOriginalResult,
      setRowSelected,
    } = useContext(UserManagementContext)
    const [reason, setReason] =useState('')
    const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)
    const [userList, setUserList] = useState([])
    const isMultipleSelected = rowSelected.length > 1
    const modalTitle = isMultipleSelected ?
    content.userDeactivateModal.titleMultiple
    : content.userDeactivateModal.title
    const modalBodyText = rowSelected.length < 1 ?
    content.userDeactivateModal.selectErrorMessage
    : (isMultipleSelected ?
      content.userDeactivateModal.bodyMultipleText
      : content.userDeactivateModal.bodyText)
    const modalBtnText = isMultipleSelected ?
      content.userDeactivateModal.multipleBtnText
      : content.userDeactivateModal.btnText
    const successMessage = content.userDeactivateModal.successMessage
    const failureMessage = content.userDeactivateModal.failureMessage

    const onReasonInputChange = (value) => {
      setReason(value)
    }

    const onClose = () => {
      setReason('')
      setIsOpen(false)
      setIsOpenConfirmation(false)
    }

    function openConfirmationModal() {
      setUserList(getUserList())
      setIsOpen(false)
      setIsOpenConfirmation(true)
    }

    function formatConfirmationMessage() {
      let message
      if (rowSelected.length === 1) {
        message = `${content.userDeactivateConfirmationModal.deactivateMessage} ${rowSelected[0].givenName} ${rowSelected[0].lastName} ${content.userDeactivateConfirmationModal.forReason} "${reason}"? ${content.userDeactivateConfirmationModal.notificationMessage}`
      }
      else if (rowSelected.length > 1) {
        message = `${content.userDeactivateConfirmationModal.deactivateMessage} ${rowSelected.length} ${content.userDeactivateConfirmationModal.users} ${content.userDeactivateConfirmationModal.forReason} "${reason}"? ${content.userDeactivateConfirmationModal.notificationMessage}`
      }
      
      return message
    }

    function getUserList() {
      console.log(rowSelected)
      const userList = rowSelected.map((row) => <li key={row.userId}>{row.givenName} {row.lastName}</li>)
      return userList
    }

    const onSuccessAction = (result) => {
      setUsersList(result)
      setOriginalResult(result)
      setRowSelected([])
      setIsOpen(false)
      setReason('')
      setIsOpenConfirmation(false)
    }
    // TODO:Move refetch function to context
    function submitRequests() {
      if(rowSelected.length > 0){
        const userIds = rowSelected.map((item) => item.userId);
        const givenNames = rowSelected.map((item) => item.givenName);
        const lastNames = rowSelected.map((item) => item.lastName);
        const emails = rowSelected.map((item) => item.email);

        const body = {
          userIds,
          deactivationReason: reason,
          givenNames,
          lastNames,
          emails
        }

        HttpRequest.deactivateUsers(body)
          .then((response) => {
            toast.success(`${rowSelected.length} ${successMessage}`, {
              position: toast.POSITION.TOP_RIGHT,
              className: `${styles.toastMsgSuccess}`,
              toastId: 'deactivate-user-success'
            });
              HttpRequest.getUserList('true')
              .then((response) => {
                const result = response?.status === 204 ? [] : response?.data
                onSuccessAction(result)
              })
              .catch((error) => {
                console.error(error)
                toast.error(` ${failureMessage}`, {
                  position: toast.POSITION.TOP_RIGHT,
                  className: `${styles.toastMsgFailure}`,
                  toastId: 'deactivate-user-failure'
                });
                setIsOpen(false)
                setIsOpenConfirmation(false)
              })
          })
          .catch((error) => {
              toast.error(` ${failureMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgFailure}`,
                toastId: 'deactivate-user-failure'
              });
              setIsOpen(false)
              setIsOpenConfirmation(false)
          })

      }
    }

    return (
        <div>
            <Modal
                modalHeader={modalTitle}
                modalId="user-deactivation-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1 || reason === '',
                    onClickHandler: () => openConfirmationModal(),
                }}
                modalSecondaryBtn={{
                    text: `${content.userDeactivateModal.cancelButton}`,
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
                      textAreaId='deactivate-reason'
                      textAreaName={content.userDeactivateModal.deactivateTextAreaTitle}
                      isRequired
                      isValid={true}
                      value={reason}
                      onChange={onReasonInputChange}
                      />
                  </div>
                }
            </Modal>
            <Modal
                modalHeader={modalTitle}
                modalId="user-deactivation-modal"
                isOpen={isOpenConfirmation}
                setIsOpen={setIsOpenConfirmation}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1 || reason === '',
                    onClickHandler: () => submitRequests(),
                }}
                modalSecondaryBtn={{
                    text: `${content.userDeactivateModal.cancelButton}`,
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
                    <ul className={styles.userList}>
                      {userList}
                    </ul> 
                  : ''}
                </div>
              </div>
            </Modal>
        </div>
    )
}