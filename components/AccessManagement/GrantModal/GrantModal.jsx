import content from '../../../assets/content/content.json'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import styles from './GrantModal.module.css'
import 'react-toastify/dist/ReactToastify.css';

export default function GrantModal(props) {
    const {
      isOpen,
      setIsOpen,
    } = props
    const {
      rowSelected,
      setRequestList,
      setOriginalResult,
      setRowSelected,
    } = useContext(AccessContext)
    const isMultipleSelected = rowSelected.length > 1
    const modalTitle = isMultipleSelected ?
    content.accessGrantModal.titleMultiple
    : content.accessGrantModal.title
    const modalBodyText = rowSelected.length < 1 ?
    content.accessGrantModal.selectErrorMessage
    : (isMultipleSelected ?
      `${content.accessGrantModal.bodyMultipleText} ${rowSelected.length} users?`
      : content.accessGrantModal.bodyText)
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
        const body = {
          action: 'Granted',
          requestIds
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
                {modalBodyText}
            </Modal>
        </div>
    )
}