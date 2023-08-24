import Content from '../../../content.json'
import PropTypes from 'prop-types'
import ManagePINDropdown from '../ManagePINDropdown/ManagePINDropdown'
import Modal from '../../Modal'
import { useState } from 'react'
import axios from 'axios'

export default function PropertyDetailsPage({}) {
    const [selectedValue, setSelectedValue] = useState()
    const [openExpireConfirmationModal, setOpenExpireConfirmationModal] =
        useState()
    const [openExpireSuccessModal, setOpenExpireSuccessModal] = useState()
    const [openExpireFailureModal, setOpenExpireFailureModal] = useState()

    function handleSelect(value) {
        setSelectedValue(value)
        if (value === 'expire-pin') {
            setOpenExpireConfirmationModal(true)
        }
    }

    function expirePIN() {
        console.log('expiring PIN')
        setOpenExpireConfirmationModal(false)
        setOpenExpireFailureModal(true)
        // axios
        //     .get(`http://localhost:3000/pins/expire`, {
        //         mode: 'cors',
        //         withCredentials: false,
        //         data: {
        //             livePinId: '61f54f51-5e79-4f7e-a376-4b6c382abe74',
        //             expirationReason: 'OP',
        //             expiredByName: 'John Smith',
        //             expiredByUsername: 'jsmith',
        //         },
        //     })
        //     .then((response) => {
        //         setOpenExpireConfirmationModal(false)
        //         setOpenExpireFailureModal(true)
        //     })
        //     .catch((error) => {
        //         setOpenExpireConfirmationModal(false)
        //         setOpenExpireFailureModal(true)
        //     })
    }

    return (
        <div>
            <ManagePINDropdown
                handleSelection={(value) => handleSelect(value)}
            />

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

PropertyDetailsPage.protoTypes = {}
