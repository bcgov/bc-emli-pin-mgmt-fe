import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import { useState } from 'react'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import Styles from './ManagePINDropdown.module.css'

export default function ManagePINDropdown({
    showPINOption,
    livePinId,
    expirationReason,
    expiredByName,
    expiredByUsername,
    livePIN
    handleSelection
}) {
    const [openExpireConfirmationModal, setOpenExpireConfirmationModal] =
        useState()
    const [openExpireSuccessModal, setOpenExpireSuccessModal] = useState()
    const [openExpireFailureModal, setOpenExpireFailureModal] = useState()
    const [openViewPINModal, setOpenViewPINModal] = useState()
    const [openViewPINFailureModal, setOpenViewPINFailureModal] = useState()

    const livePINArray1 = livePIN?.substring(0,4).split('')
    const livePINArray2 = livePIN?.substring(4,8).split('')

    function getSelection(value) {
        handleSelection(value)
    }

    function expirePIN() {
        HttpRequest.expirePIN({
            livePinId: livePinId,
            expirationReason: expirationReason,
            expiredByName: expiredByName,
            expiredByUsername: expiredByUsername,
        })
            .then((response) => {
                setOpenExpireConfirmationModal(false)
                setOpenExpireSuccessModal(true)
            })
            .catch((error) => {
                setOpenExpireConfirmationModal(false)
                setOpenExpireFailureModal(true)
            })
    }

    


    const options = [
        {
            label: Content.managePINDropdown.recreateOption,
            value: 'recreate-pin',
            isDisabled: false,
        },
        {
            label: Content.managePINDropdown.expireOption,
            value: 'expire-pin',
            isDisabled: false,
        },
    ]

    if (showPINOption) {
        options.push({
            label: Content.managePINDropdown.viewOption,
            value: 'view-pin',
            isDisabled: false,
        })
    }

    return (
        <div>
            <Dropdown
                label={Content.managePINDropdown.label}
                options={options}
                handleSelection={getSelection}
            ></Dropdown>

            {/* expire PIN modal section */}
            <Modal
                modalHeader={Content.expirePINConfirmationModal.title}
                modalId="expire-pin-confirmation-modal"
                isOpen={openExpireConfirmationModal}
                setIsOpen={setOpenExpireConfirmationModal}
                modalMainBtn={{
                    text: `${Content.expirePINConfirmationModal.primaryButton}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => expirePIN(), // TODO: change this to call API
                }}
                modalSecondaryBtn={{
                    text: `${Content.expirePINConfirmationModal.secondaryButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setOpenExpireConfirmationModal(false),
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
            {/* end expire PIN modal section */}
        </div>
    )
}

ManagePINDropdown.protoTypes = {
    role: PropTypes.bool,
    livePinId: PropTypes.string.isRequired,
    expirationReason: PropTypes.string.isRequired,
    expiredByName: PropTypes.string,
    expiredByUsername: PropTypes.string,
}
