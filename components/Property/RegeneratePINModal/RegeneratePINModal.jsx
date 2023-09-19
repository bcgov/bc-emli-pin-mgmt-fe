import { use, useState } from 'react'
import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import Modal from '../../Modal'
import Styles from './RegeneratePINModal.module.css'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'
import Textbox from '../../Textbox/index'

export default function RegeneratePINModal({
    isOpen, 
    setIsOpen, 
    livePinId, 
    regenerationReason, 
    regeneratedByName,
    regeneratedByUsername
}) {
    const [openRegenerateSuccessModal, setOpenRegenerateSuccessModal] = useState()
    const [openRegenerateFailureModal, setOpenRegenerateFailureModal] = useState()
    const [isRegeneratePINButtonDisabled, setIsRegeneratePINDisabled] = useState(true)
    const [phone, setPhoneValue] = useState()
    const [email, setEmailValue] = useState()

    const setPhoneValueOnChange = (phoneValue) => {
        setPhoneValue(phoneValue)
        if (validatePhoneRegex(phone) || validateEmailRegex(email)){
            setIsRegeneratePINDisabled(false)
        } else {
            setIsRegeneratePINDisabled(true)
        }
    }

    const setEmailValueOnChange = (emailValue) => {
        setEmailValue(emailValue)
        if (validatePhoneRegex(phone) || validateEmailRegex(email)){
            setIsRegeneratePINDisabled(false)
        } else {
            setIsRegeneratePINDisabled(true)
        }
    }

    const validatePhoneRegex = (phone) => {
        if (/[0-9]{10}/.test(phone)){
            return true
        }
        return false
    }

    const validateEmailRegex = (email) => {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    const regeneratePIN = () => {
        HttpRequest.regeneratePIN({
            // TODO: check param for be api call
            livePinId: livePinId,
            expirationReason: regenerationReason,
            expiredByName: regeneratedByName,
            expiredByUsername: regeneratedByUsername,
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
                    disabled: isRegeneratePINButtonDisabled,
                    onClickHandler: () => regeneratePIN(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.regeneratePINModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
                <div className={`${Styles.contentWrap}`}>
                    {Content.regeneratePINModal.contentMsg}
                </div>
                <div className='flex justify-between'>
                    <div className={`${Styles.inputWrap}`}>
                        <Textbox
                            textBoxId='phone'
                            textBoxLabel={Content.regeneratePINModal.phone}
                            textBoxAriaLabel={Content.regeneratePINModal.phone}
                            textBoxPlaceholder={Content.regeneratePINModal.phonePlaceHolder}
                            inputType="tel"
                            onHandleChange={setPhoneValueOnChange}
                        />
                    </div>
                    <div className={`${Styles.inputWrap}`}>
                        <Textbox
                            textBoxId='email'
                            textBoxLabel={Content.regeneratePINModal.email}
                            textBoxAriaLabel={Content.regeneratePINModal.email}
                            textBoxPlaceholder={Content.regeneratePINModal.emailPlaceHolder}
                            inputType="email"
                            onHandleChange={setEmailValueOnChange}
                        />
                    </div>
                </div>
            </Modal>

            <Modal
                modalHeader={Content.regeneratePINModal.successModalTitle}
                modalId="regenerate-pin-success-modal"
                isOpen={openRegenerateSuccessModal}
                setIsOpen={setOpenRegenerateSuccessModal}
                modalMainBtn={{
                    text: `${Content.expirePINSuccessModal.primaryButton}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => setOpenRegenerateSuccessModal(false),
                }}
            >
                {Content.regeneratePINModal.successModalMsg}
            </Modal>

            <Modal
                modalHeader={Content.regeneratePINModal.failureModalTitle}
                modalId="regenerate-pin-failure-modal"
                isOpen={openRegenerateFailureModal}
                setIsOpen={setOpenRegenerateFailureModal}
                variant="error"
                modalMainBtn={{
                    text: `${Content.expirePINFailureModal.primaryButton}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => regeneratePIN(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.regeneratePINModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setOpenRegenerateFailureModal(false),
                }}
            >
                {Content.regeneratePINModal.failureModalMag}
            </Modal>
        </>
    )
}
