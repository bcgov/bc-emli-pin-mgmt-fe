import PropTypes from 'prop-types'

import { Button } from '../Button/index'

import CloseIcon from '../../assets/svgs/CloseIcon'

import styles from './Modal.module.css'
import { testAttr } from '../../utils/test.utils'
import { useState } from 'react'

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
    ...props
}) {
    return (
        <>
            {isOpen && (
                <div {...testAttr(modalId)} className={styles.overlay}>
                    <div
                        className={`${styles.container} ${
                            variant ? styles[variant] : ''
                        }`}
                    >
                        {modalHeader && (
                            <div className={styles.header}>
                                {modalHeader}

                                <span
                                    aria-label="close-icon"
                                    onClick={() => setIsOpen(false)}
                                    className={styles.close}
                                >
                                    <CloseIcon />
                                </span>
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
