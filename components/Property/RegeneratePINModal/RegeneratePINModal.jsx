import { useState, useEffect } from 'react'
import Content from '../../../assets/content/content.json'
import Modal from '../../Modal'
import Styles from './RegeneratePINModal.module.css'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'
import Textbox from '../../Textbox/index'
import { customSnowplowCall } from '../../../public/snowplow'

export default function RegeneratePINModal({
    isOpen,
    setIsOpen,
    livePinId,
    propertyAddress,
    siteId,
    reloadPage,
    keepOpen,
    userName
}) {
    const [openRegenerateSuccessModal, setOpenRegenerateSuccessModal] = useState()
    const [openRegenerateFailureModal, setOpenRegenerateFailureModal] = useState()
    const [isRegeneratePINButtonDisabled, setIsRegeneratePINDisabled] = useState(true)
    const [phone, setPhoneValue] = useState()
    const [email, setEmailValue] = useState()
    const [confimationMessage, setConfirmationMessage] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const setPhoneValueOnChange = (phoneValue) => {
        setPhoneValue(phoneValue)
        if (validatePhoneRegex(phoneValue) || validateEmailRegex(email)){
            setIsRegeneratePINDisabled(false)
        } else {
            setIsRegeneratePINDisabled(true)
        }
    }

    const setEmailValueOnChange = (emailValue) => {
        setEmailValue(emailValue)
        if (validatePhoneRegex(phone) || validateEmailRegex(emailValue)){
            setIsRegeneratePINDisabled(false)
        } else {
            setIsRegeneratePINDisabled(true)
        }
    }

    const validatePhoneRegex = (phone) => {
        if (/[0-9]{10}/.test(phone)){
            setPhoneValue(phone)
            return true
        }
        return false
    }

    const validateEmailRegex = (email) => {
        if (/^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    const chooseConfirmationMessage = () => {
        let phoneWithDashes
        if (phone) {
            phoneWithDashes = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6)
        }
        if (phone && !email) {
            setConfirmationMessage(`${Content.regeneratePINModal.newAccessCodeCreatedViaSMS} (${phoneWithDashes}) ${Content.regeneratePINModal.soon}.`)
        } else if (!phone && email) {
            setConfirmationMessage(`${Content.regeneratePINModal.newAccessCodeCreatedViaEmail} (${email}) ${Content.regeneratePINModal.soon}.`)
        } else if (phone && email) {
            setConfirmationMessage(`${Content.regeneratePINModal.newAccessCodeCreatedViaSMS} (${phoneWithDashes}) ${Content.regeneratePINModal.andEmail} (${email}) ${Content.regeneratePINModal.soon}.`)
        }
    }

    const regeneratePIN = () => {
        customSnowplowCall(
            'pin_generate',
            userName,
            '',
            '',
            '',
            '',
            '',
            livePinId
        )
        
        let formattedPhone
        if (phone) {
            (phone?.length == 11) ? formattedPhone = phone : formattedPhone = '1' + phone;
        }

        HttpRequest.regeneratePIN({
            phoneNumber: formattedPhone,
            email: email,
            livePinId: livePinId,
            propertyAddress: propertyAddress
        })
            .then((response) => {
                setIsOpen(false)
                chooseConfirmationMessage()
                setOpenRegenerateSuccessModal(true)
                setPhoneValue('')
                setEmailValue('')
            })
            .catch((error) => {
                if (error.response.data.faults[0].includes("Phone number must be a valid, 10 digit North American phone number prefixed with 1 or +1")) {
                    setErrorMessage(formattedPhone + Content.regeneratePINModal.phoneFailureModalMessage)
                } else if (error.response.data.faults[0].includes("email_address Not a valid email address")) {
                    setErrorMessage(email + Content.regeneratePINModal.emailFailureModalMessage)
                } else {
                    setErrorMessage(Content.regeneratePINModal.failureModalMag)
                }
                setIsOpen(false)
                setOpenRegenerateFailureModal(true)
                setPhoneValue('')
                setEmailValue('')
            })
    }

    const closeRegenerateSuccessModal = () => {
        setOpenRegenerateSuccessModal(false)
        reloadPage()
    }

    const backToMainModal = () => {
        setOpenRegenerateFailureModal(false)
        setIsOpen(true)
    }


    return (
        <>
            <Modal
                modalHeader={Content.regeneratePINModal.title}
                modalId="regenerate-pin-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${Content.regeneratePINModal.primaryButton}`,
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
                            type="number" 
                            onHandleChange={setPhoneValueOnChange}
                            data-testid='phone'
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
                            data-testid='email'
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
                    onClickHandler: () => closeRegenerateSuccessModal(false),
                }}
                closeFunction={closeRegenerateSuccessModal}
            >
                {confimationMessage}
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
                    onClickHandler: (errorMessage == Content.regeneratePINModal.failureModalMag) ? () => regeneratePIN() : () => backToMainModal(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.regeneratePINModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setOpenRegenerateFailureModal(false),
                }}
            >
                {errorMessage}
            </Modal>
        </>
    )
}
