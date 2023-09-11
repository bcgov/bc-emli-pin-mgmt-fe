import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import Modal from '../../Modal'
import Styles from './RecreatePINModal.module.css'

export default function RecreatePINModal({setIsOpen}) {


    return (
        <>
            <Modal
                modalHeader=""
                modalId=""
                isOpen={true}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${Content.viewPINModal.close}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
              
            </Modal>
        </>
    )
}
