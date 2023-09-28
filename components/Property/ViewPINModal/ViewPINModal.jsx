import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown/index'
import Modal from '../../Modal'
import Styles from './ViewPINModal.module.css'

export default function ViewPINModal({ livePIN, isOpen, setIsOpen}) {
    const livePINArray1 = livePIN?.toUpperCase().substring(0,4).split('')
    const livePINArray2 = livePIN?.toUpperCase().substring(4,8).split('')
    
    return (
        <>
            <Modal
                modalHeader={Content.viewPINModal.title}
                modalId="view-pin-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${Content.viewPINModal.close}`,
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
               {
                    livePIN &&
                    <div className={`${Styles.pinWrap}` + " text-center"}>
                        {
                            livePINArray1.map((char, index) => (
                                <span key={index} className={`${Styles.pinSpan}`}>{char}</span>
                            ))}
                        <span className={`${Styles.dash}`}>-</span>
                        {
                            livePINArray2.map((char, index) => (
                                <span key={index} className={`${Styles.pinSpan}`}>{char}</span>
                            ))}
                    </div>
                }
                {
                    (!livePIN) && 
                    Content.viewPINModal.noLivePINMag
                }
            </Modal>
        </>
    )
}
