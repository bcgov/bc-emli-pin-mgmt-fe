import { useRef, useState } from 'react'
import { useClickOutSide } from '../../utils/customHooks/useClickOutSide'
import PropTypes from 'prop-types'

import ArrowDown from '../../assets/svgs/ArrowDown'

import styles from './Dropdown.module.css'

export default function Dropdown({
    options,
    variant,
    size,
    handleSelection,
    ariaLabel,
    className,
    label,
    disabled,
    selectedValue,
}) {
    const [toggleDropdown, setToggleDropdown] = useState(false)
    const handleShowHideDropdown = () => setToggleDropdown((prev) => !prev)
    const dropdownContainerRef = useRef(null)
    const dropdownButtonRef = useRef(null)
    // this hook handles dropdown menu on outside click or tab
    useClickOutSide(
        dropdownButtonRef,
        dropdownContainerRef,
        handleShowHideDropdown
    )
    const onClickAction = (value) => {
        handleSelection(value)
        handleShowHideDropdown()
    }
    return (
        <div className={`${className} ${styles.actionDropdown}`}>
            <button
                disabled={disabled}
                className={`${styles.actionDropdownButton} ${
                    variant ? styles[variant] : ''
                } ${size ? styles[size] : ''} ${
                    styles[disabled] && styles.disabled
                }`}
                type="button"
                ref={dropdownButtonRef}
                onClick={handleShowHideDropdown}
                aria-expanded={toggleDropdown}
                aria-label={ariaLabel}
                data-testid="dropdown-btn"
            >
                <span>{`${selectedValue ? selectedValue.label : label}`}</span>
                <span
                    className={`${
                        toggleDropdown
                            ? styles.expandedChevron
                            : styles.collapsedChevron
                    }`}
                >
                    <ArrowDown />
                </span>
            </button>
            {toggleDropdown && (
                <ul
                    className={`${styles.actionDropdownList}`}
                    ref={dropdownContainerRef}
                >
                    {options.map((option, i) => (
                        <li key={i}>
                            <button
                                className={`${
                                    selectedValue &&
                                    selectedValue.label === option.label
                                        ? styles.bold
                                        : ''
                                }`}
                                onClick={() => onClickAction(option.value)}
                                disabled={option.isDisabled}
                            >
                                {option.label}
                                <span className={`${styles.notBold}`}>
                                    {option.caption}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

Dropdown.protoTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    size: PropTypes.oneOf(['medium']),
    options: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
    }),
    handleSelection: PropTypes.func,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.boolean,
    selectedValue: PropTypes.string,
}

Dropdown.defaultProps = {
    variant: 'primary',
    size: 'medium',
    options: [{ label: 'No options', value: 'no-options', isDisabled: true }],
    ariaLabel: 'Actions Dropdown',
    label: 'Actions',
    disabled: false,
}

Dropdown.displayName = 'Dropdown'
