import PropTypes from 'prop-types'
import './style.css'

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
	const rootClass = 'text-box'

	const errorMessageSelector = () =>
		(!isValid && errorMessage) || (!isRegexValid && regexErrorMessage)
	return (
		// <section className={rootClass}>
			<div className="text_label">
				{textBoxLabel && (
					<label htmlFor={textBoxId}>
						{textBoxLabel}
						{isRequired && !isDisabled && (
							<span className={`${rootClass}__required-field`}>*</span>
						)}
					</label>
				)}

				<input
					type={inputType}
					id={textBoxId}
					name={textBoxId}
					placeholder={textBoxPlaceholder}
					disabled={isDisabled}
					required={isRequired}
					aria-required={isRequired}
					onChange={(e) => onHandleChange(e.target.value)}
					className={`text_input ${moreClasses} ${
						hasError
							? `error-input`
							: isDisabled
							? `${rootClass}__disabled-div`
							: ''
					}`}
					maxLength={textBoxLimit}
					aria-label={textBoxAriaLabel}
					{...props}
				/>
				<div className={`${rootClass}__footer-text`}>{textBoxFooter}</div>
				<div
					className={`${
						hasError ? `${rootClass}__error-message` : `${rootClass}__hide-div`
					}`}
				>
					{errorMessageSelector()}
				</div>
			</div>
		// </section>
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
