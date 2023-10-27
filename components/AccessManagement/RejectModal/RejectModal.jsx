import content from '../../../assets/content/content.json'
import styles from './RejectModal.module.css'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext, useState } from 'react'
import TextArea from '../../TextArea'

export default function GrantModal(props) {
    const {
      isOpen,
      setIsOpen,
    } = props
    const { rowSelected } = useContext(AccessContext)
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

    const onReasonInputChange = (value) => {
      setRejectReason(value)
    }

    const onClose = () => {
      setRejectReason('')
      setIsOpen(false)
    }

    function submitRejectRequests() {
      console.log('get ids and set as a part of the body');
      /*  HttpRequest.expirePIN({
            livePinId: livePinId,
            expirationReason: Content.pinHistoryModal.typeCode.callCenter,
            // TO DO: to be removed after backend intergrated
            expiredByUsername: "First last name",
        })
            .then((response) => {
                setIsOpen(false)
                setOpenExpireSuccessModal(true)
            })
            .catch((error) => {
                setIsOpen(false)
                setOpenExpireFailureModal(true)
            }) */
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