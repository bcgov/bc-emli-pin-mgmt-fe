// import './styles.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const RadioButton = ({
    radioButtonName,
    radioButtonId,
    radioButtonLabel,
    hasError,
    isDisabled
}) => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <label class="radio" htmlFor={radioButtonId}>
            {radioButtonLabel}
            <input
                type="radio"
                name={radioButtonName}
                id={radioButtonId}
                onChange={(e) => setIsSelected(!isSelected)}
                aria-invalid={hasError}
                disabled={isDisabled}
            />
            <span 
                class="dot"
                htmlFor={radioButtonId}
            >
            </span>
        </label>
    )
}

RadioButton.propTypes = {
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	radioButtonId: PropTypes.string.isRequired,
	radioButtonLabel: PropTypes.string.isRequired,
	radioButtonName: PropTypes.string.isRequired,
}

RadioButton.defaultProps = {
	isDisabled: false,
	hasError: false,
}

