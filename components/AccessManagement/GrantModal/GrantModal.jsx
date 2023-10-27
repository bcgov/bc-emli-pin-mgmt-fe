import content from '../../../assets/content/content.json'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext } from 'react'

export default function GrantModal(props) {
    const {
      isOpen,
      setIsOpen,
    } = props
    const { rowSelected } = useContext(AccessContext)
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

    function submitRequests() {
      console.log('get ids and set as a part of the body');
      // after update call main api again to setResultList
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