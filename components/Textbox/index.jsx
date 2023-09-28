import PropTypes from 'prop-types'
import Styles from './Textbox.module.css'
import { useState, useRef, useEffect } from 'react'

function TextBox({
	textBoxId,
	textBoxLabel,
	textBoxPlaceholder,
	textBoxFooter,
	textBoxLimit,
	textBoxAriaLabel,
	errorMessage,
	regexErrorMessage,
	hasValue,
	onHandleChange,
	isValid,
	isRegexValid,
	isRequired,
	isDisabled,
	hasError,
	inputType,
	moreClasses,
	...props
}) {
	const rootClass = Styles.textBoxWrap
	const field = useRef(null)

	const errorMessageSelector = () =>
		(!isValid && errorMessage) || (!isRegexValid && regexErrorMessage)

	useEffect(() => {
		let interVal = setInterval(() => {
			if(field.current){
				onHandleChange(field.current.value)
				clearInterval(interVal)
			}
		}, 100)
	})

		
	return (
		<>
			<div className={`${Styles.textBoxWrap}`}>
				<div className={`${Styles.textLabel}`}>
					{textBoxLabel && (
						<label htmlFor={textBoxId}>
							{textBoxLabel}
							{isRequired && !isDisabled && (
								<span className={`${Styles.required}`}>*</span>
							)}
						</label>
					)}
				</div>
			</div>

			<div>
				<input
					ref={field}
					type={inputType}
					id={textBoxId}
					name={textBoxId}
					placeholder={textBoxPlaceholder}
					disabled={isDisabled}
					required={isRequired}
					aria-required={isRequired}
					onChange={(e) => onHandleChange(e.target.value)}
					className={`${Styles.textInput} ${moreClasses} ${hasError
							? `error-input`
							: isDisabled
								? `${rootClass}__disabled-div`
								: ''
						}`}
					maxLength={textBoxLimit}
					aria-label={textBoxAriaLabel}
					{...props}
				/>
				<div className={`${Styles.footerText}`}>{textBoxFooter}</div>
				<div
					className={`${hasError ? `${rootClass}__error-message` : `${rootClass}__hide-div`
						}`}
				>
					{errorMessageSelector()}
				</div>
			</div>
		</>
	)
}

TextBox.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onHandleChange: PropTypes.func,
	isRegexValid: PropTypes.bool,
	hasError: PropTypes.bool,
	textBoxId: PropTypes.string.isRequired,
	textBoxLabel: PropTypes.string,
	textBoxPlaceholder: PropTypes.string,
	textBoxFooter: PropTypes.string,
	textBoxAriaLabel: PropTypes.string,
	moreClasses: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool,
	errorMessage: PropTypes.string,
	textBoxLimit: PropTypes.number,
	regexErrorMessage: PropTypes.string,
	inputType: PropTypes.string,
}

TextBox.defaultProps = {
	// value: '',
	isRegexValid: true,
	textBoxPlaceholder: '',
	textBoxFooter: '',
	isRequired: false,
	isDisabled: false,
	errorMessage: '',
	textBoxLimit: 256,
	regexErrorMessage: '',
	inputType: 'text',
}

export default TextBox
