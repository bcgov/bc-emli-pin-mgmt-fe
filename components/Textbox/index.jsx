import PropTypes from 'prop-types'
import Styles from './Textbox.module.css'
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
	isRegexValid,
	isRequired,
	isDisabled,
	hasError,
	inputType,
	moreClasses,
	...props
}) {
	const rootClass = Styles.textBoxWrap

	return (
		<>
			<div className={`${Styles.textBoxWrap}`}>
				<div className={`${Styles.textLabel} ${isDisabled ? Styles.textLabelDisabled : ''}`}>
					{textBoxLabel && (
						<label htmlFor={textBoxId}>
							{textBoxLabel}
							{isRequired && !isDisabled && (
								<span className={`${Styles.required}`}>&nbsp;*</span>
							)}
						</label>
					)}
				</div>
			</div>

			<div>
				<input
					type={inputType}
					id={textBoxId}
					name={textBoxId}
					placeholder={textBoxPlaceholder}
					disabled={isDisabled}
					required={isRequired}
					aria-required={isRequired}
					onChange={(e) => onHandleChange(e.target.value)}
					className={`${Styles.textInput} ${moreClasses}
          ${hasError? Styles.error
							: isDisabled
								? `${rootClass}__disabled-div`
								: ''
						}`}
					maxLength={textBoxLimit}
					aria-label={textBoxAriaLabel}
					{...props}
				/>
				<div className={`${Styles.footerText}`}>{textBoxFooter}</div>
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
  onHandleChange: () => {}
}

export default TextBox
