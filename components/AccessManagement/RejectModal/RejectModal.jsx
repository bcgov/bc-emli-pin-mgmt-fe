import content from '../../../assets/content/content.json'
import styles from './RejectModal.module.css'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext, useState } from 'react'
import TextArea from '../../TextArea'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function RejectModal(props) {
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
    const [rejectReason, setRejectReason] =useState('')
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
    }

    const onSuccessAction = (result) => {
      setRequestList(result)
      setOriginalResult(result)
      setRowSelected([])
      setIsOpen(false)
      setRejectReason('')
    }
    // TODO:Move refetch function to context
    function submitRejectRequests() {
      if(rowSelected.length > 0){
        const requestIds = rowSelected.map((item) => item.requestId);
        const body = {
          action: 'Rejected',
          requestIds,
          rejectionReason: rejectReason
        }
        HttpRequest.updateAccessRequest(body)
          .then((response) => {
            toast.success(`${rowSelected.length} ${successMessage}`, {
              position: toast.POSITION.TOP_RIGHT,
              className: `${styles.toastMsgSuccess}`
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
                  className: `${styles.toastMsgFailure}`
                });
                setIsOpen(false)
              })
          })
          .catch((error) => {
              toast.error(` ${failureMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgFailure}`
              });
              setIsOpen(false)
          })

      }
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
                    onClickHandler: () => submitRejectRequests(),
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
        </div>
    )
}