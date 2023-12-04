import Content from '../../../assets/content/content.json'
import Modal from '../../Modal'
import ViewPINHistory from './ViewPINHistory'

export default function ViewPINHistoryModal({ isOpen, setIsOpen, pinHistory }) {

    return (
        <>
            {pinHistory !== 'error' && (
                <Modal
                    modalHeader={Content.pinHistoryModal.title}
                    modalId="pin-history-modal"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    modalMainBtn={{
                        text: Content.pinHistoryModal.primaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () => setIsOpen(false),
                    }}
                >
                    <ViewPINHistory pinHistory={pinHistory} />
                </Modal>
            )}
            {pinHistory === 'error' && (
                <Modal
                modalHeader={Content.pinHistoryFailureModal.title}
                modalId="pin-history-failure-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
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
                    onClickHandler: () => setIsOpen(false),
                }}
            >
                {Content.pinHistoryFailureModal.body}
            </Modal>
            )}
        </>
    )
}
