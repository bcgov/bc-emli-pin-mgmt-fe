import { useState } from 'react'
import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import Modal from '../../Modal'
import Styles from './RegeneratePINModal.module.css'
import HttpRequest from '../../../apiManager/httpRequestHandler'

export default function RegeneratePINModal({
    isOpen, 
    setIsOpen
}) {
    const [openRegenerateSuccessModal, setOpenRegenerateSuccessModal] = useState()
    const [openRegenerateFailureModal, setOpenRegenerateFailureModal] = useState()

    function recreatePIN(){
        HttpRequest.expirePIN({
            livePinId: livePinId,
            expirationReason: expirationReason,
            expiredByName: expiredByName,
            expiredByUsername: expiredByUsername,
        })
            .then((response) => {
                setIsOpen(false)
                setOpenRegenerateSuccessModal(true)
            })
            .catch((error) => {
                setIsOpen(false)
                setOpenRegenerateFailureModal(true)
            })
    }

    return (
        <>
            <Modal
                modalHeader={Content.regeneratePINModal.title}
                modalId="regenerate-pin-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${Content.regeneratePINModal.title}`,
                    size: 'medium',
                    variant: 'primary',
                    disable: true,
                    onClickHandler: () => recreatePIN(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.regeneratePINModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
            {Content.regeneratePINModal.contentMsg}
            <div>

            </div>
            </Modal>
        </>
    )
}
