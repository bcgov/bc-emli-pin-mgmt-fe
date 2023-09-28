import Content from '../../../assets/content/content.json'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import { useState } from 'react'
import HttpRequest from '../../../apiManager/httpRequestHandler'

export default function ExpirePINModal({
    livePinId,
    setIsOpen,
    isOpen,
}) {
    const [openExpireSuccessModal, setOpenExpireSuccessModal] = useState()
    const [openExpireFailureModal, setOpenExpireFailureModal] = useState()

    function expirePIN() {
        HttpRequest.expirePIN({
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
            })
    }

    return (
        <div>
            <Modal
                modalHeader={Content.expirePINConfirmationModal.title}
                modalId="expire-pin-confirmation-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${Content.expirePINConfirmationModal.primaryButton}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => expirePIN(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.expirePINConfirmationModal.secondaryButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
                {Content.expirePINConfirmationModal.body}
            </Modal>

            <Modal
                modalHeader={Content.expirePINSuccessModal.title}
                modalId="expire-pin-success-modal"
                isOpen={openExpireSuccessModal}
                setIsOpen={setOpenExpireSuccessModal}
                modalMainBtn={{
                    text: `${Content.expirePINSuccessModal.primaryButton}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => setOpenExpireSuccessModal(false),
                }}
            >
                {Content.expirePINSuccessModal.body}
            </Modal>

            <Modal
                modalHeader={Content.expirePINFailureModal.title}
                modalId="expire-pin-failure-modal"
                isOpen={openExpireFailureModal}
                setIsOpen={setOpenExpireFailureModal}
                variant="error"
                modalMainBtn={{
                    text: `${Content.expirePINFailureModal.primaryButton}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => expirePIN(),
                }}
            >
                {Content.expirePINFailureModal.body}
            </Modal>
        </div>
    )
}

ExpirePINModal.propTypes = {
    livePinId: PropTypes.string.isRequired,
    expiredByUsername: PropTypes.string,
}
