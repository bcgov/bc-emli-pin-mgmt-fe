import PropTypes from 'prop-types'
import { Button } from '../Button/index'
import CloseIcon from '../../assets/svgs/CloseIcon'
import styles from './Modal.module.css'
import { testAttr } from '../../utils/test.utils'

export default function Modal({
    isOpen,
    setIsOpen,
    modalHeader,
    modalId,
    children,
    ariaModalLabels,
    modalMainBtn,
    modalSecondaryBtn,
    variant,
    closeFunction,
    ...props
}) {
    
    const handleClose = () => {
        if (closeFunction) {
            closeFunction()
        } else {
            setIsOpen(false)
        }
    }

    return (
        <>
            {isOpen && (
                <div {...testAttr(modalId)} className={styles.overlay} id={modalId}>
                    <div
                        className={`${styles.container} ${
                            variant ? styles[variant] : ''
                        }`}
                    >
                        {modalHeader && (
                            <div className={styles.header} id='modalHeader'>
                                {modalHeader}

                                <button
                                    aria-label='close-button'
                                    onClick={() => handleClose()}
                                    className={styles.close}
                                    tabIndex='0'
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        )}

                        <div className={styles.body}>{children}</div>

                        {(modalMainBtn || modalSecondaryBtn) && (
                            <div
                                className={
                                    modalSecondaryBtn
                                        ? styles.footerTwoBtn
                                        : styles.footer
                                }
                            >
                                <Button
                                    variant={modalMainBtn.variant}
                                    handleOnClick={() =>
                                        modalMainBtn.onClickHandler()
                                    }
                                    isDarkBackground={true}
                                    disabled={modalMainBtn.disabled}
                                    data-testid='modalMainBtn'
                                    id='modalMainBtn'
                                >
                                    {modalMainBtn.text}
                                </Button>

                                {modalSecondaryBtn && (
                                    <Button
                                        variant={modalSecondaryBtn.variant}
                                        handleOnClick={() =>
                                            modalSecondaryBtn.onClickHandler()
                                        }
                                        isDarkBackground={false}
                                        data-testid='modalSecondaryBtn'
                                    >
                                        {modalSecondaryBtn.text}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    modalHeader: PropTypes.string,
    modalId: PropTypes.node.isRequired,
    children: PropTypes.node,
    modalMainBtn: PropTypes.shape({
        id: PropTypes.node,
        text: PropTypes.string.isRequired,
        size: PropTypes.string,
        variant: PropTypes.string,
        onClickHandler: PropTypes.func,
    }),
    modalSecondaryBtn: PropTypes.shape({
        id: PropTypes.node,
        text: PropTypes.string,
        size: PropTypes.string,
        variant: PropTypes.string,
        onClickHandler: PropTypes.func,
    }),
    setIsOpen: PropTypes.func,
}
