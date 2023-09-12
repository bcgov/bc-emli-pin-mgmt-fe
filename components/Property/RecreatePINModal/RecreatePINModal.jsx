import { useState } from 'react'
import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import Modal from '../../Modal'
import Styles from './RecreatePINModal.module.css'
import HttpRequest from '../../../apiManager/httpRequestHandler'

export default function RecreatePINModal({
    isOpen, 
    setIsOpen
}) {
    const [openRecreateSuccessModal, setOpenRecreateSuccessModal] = useState()
    const [openRecreateFailureModal, setOpenRecreateFailureModal] = useState()

    function recreatePIN(){
        HttpRequest.expirePIN({
            livePinId: livePinId,
            expirationReason: expirationReason,
            expiredByName: expiredByName,
            expiredByUsername: expiredByUsername,
        })
            .then((response) => {
                setIsOpen(false)
                setOpenRecreateSuccessModal(true)
            })
            .catch((error) => {
                setIsOpen(false)
                setOpenRecreateFailureModal(true)
            })
    }

    return (
        <>
            <Modal
                modalHeader={Content.recreatePINModal.title}
                modalId="recreate-pin-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${Content.recreatePINModal.recreatePINButton}`,
                    size: 'medium',
                    variant: 'primary',
                    disable: true,
                    onClickHandler: () => recreatePIN(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.recreatePINModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
            {Content.recreatePINModal.contentMsg}
            <div>

            </div>
            </Modal>
        </>
    )
}
