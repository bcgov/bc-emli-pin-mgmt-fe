import Content from '../../../assets/content/content.json'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import { useState } from 'react'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import Textbox from "../../Textbox/index";
import Styles from './ExpirePINModal.module.css'

export default function ExpirePINModal({
    livePinId,
    setIsOpen,
    isOpen,
    propertyAddress
}) {
    const [openExpireSuccessModal, setOpenExpireSuccessModal] = useState()
    const [openExpireFailureModal, setOpenExpireFailureModal] = useState()
    const [isExpirePINButtonDisabled, setIsExpirePINDisabled] = useState(true)
    const [phone, setPhoneValue] = useState()
    const [email, setEmailValue] = useState()

    const setPhoneValueOnChange = (phoneValue) => {
        setPhoneValue(phoneValue)
        if (validatePhoneRegex(phoneValue) || validateEmailRegex(email)){
            setIsExpirePINDisabled(false)
        } else {
            setIsExpirePINDisabled(true)
        }
    }

    const setEmailValueOnChange = (emailValue) => {
        setEmailValue(emailValue)
        if (validatePhoneRegex(phone) || validateEmailRegex(emailValue)){
            setIsExpirePINDisabled(false)
        } else {
            setIsExpirePINDisabled(true)
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
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    const expirePIN = () => {
        let formattedPhone
        if (phone) {
            (phone?.length == 11) ? formattedPhone = phone : formattedPhone = '1' + phone;
        }

        HttpRequest.expirePIN({
            phoneNumber: formattedPhone,
            email: email,
            livePinId: livePinId,
            propertyAddress: propertyAddress,
            expirationReason: Content.pinHistoryModal.typeCode.callCenter,
            // TO DO: to be removed after backend intergrated 
            expiredByUsername: "First last name",
        })
            .then((response) => {
                setIsOpen(false)
                setOpenExpireSuccessModal(true)
                setPhoneValue('')
                setEmailValue('')
            })
            .catch((error) => {
                setIsOpen(false)
                setOpenExpireFailureModal(true)
                setPhoneValue('')
                setEmailValue('')
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
                    disabled: isExpirePINButtonDisabled,
                    onClickHandler: () => expirePIN(),
                }}
                modalSecondaryBtn={{
                    text: `${Content.expirePINConfirmationModal.secondaryButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
                <div className={`${Styles.contentWrap}`}>
                    {Content.expirePINConfirmationModal.body}
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
