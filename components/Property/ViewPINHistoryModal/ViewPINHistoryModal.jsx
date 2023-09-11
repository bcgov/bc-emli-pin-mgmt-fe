import Content from '../../../content.json'
import Modal from '../../Modal'
import Styles from './ViewPINHistoryModal.module.css'
import ViewPINHistory from '../ViewPINHistory/ViewPINHistory'
import { useState } from 'react'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import { useEffect } from 'react'

export default function ViewPINHistoryModal({ isOpen, setIsOpen, livePinId }) {
    const [pinHistory, setPinHistory] = useState()
    const [openPINHistoryModal, setOpenPINHistoryModal] = useState(false)
    const [openPINHistoryFailureModal, setOpenPINHistoryFailureModal] =
        useState(false)
    // const [isOpen, setIsOpen] = useState(true)

    function getPINHistory() {
        console.log('here')
        HttpRequest.getPINHistory(livePinId)
            .then((response) => {
                setPinHistory(response.data.logs)
                setOpenPINHistoryModal(true)
                // setIsOpen(false)
            })
            .catch((error) => {
                setPinHistory(null)
                setIsOpen(false)
            })
        // setIsOpen(false)
    }

    useEffect(() => {
        console.log('here3')
        isOpen ? getPINHistory() : ''
    }, [isOpen])

    console.log(isOpen)

    return (
        <>
            {pinHistory && (
                <Modal
                    modalHeader={Content.pinHistoryModal.title}
                    modalId="pin-history-modal"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    modalMainBtn={{
                        text: Content.pinHistoryModal.primaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () => setIsOpen(),
                    }}
                >
                    <ViewPINHistory pinHistory={pinHistory} />
                </Modal>
            )}
            {(!pinHistory) && (
                <Modal
                    modalHeader={Content.pinHistoryFailureModal.title}
                    modalId="pin-history-failure-modal"
                    isOpen={openPINHistoryFailureModal}
                    setIsOpen={setOpenPINHistoryFailureModal}
                    variant="error"
                    modalMainBtn={{
                        text: Content.pinHistoryFailureModal.primaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () => getPINHistory(),
                    }}
                    modalSecondaryBtn={{
                        text: Content.pinHistoryFailureModal.secondaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () =>
                            setOpenPINHistoryFailureModal(false),
                    }}
                >
                    {Content.pinHistoryFailureModal.body}
                </Modal>
            )}
        </>
    )
}
