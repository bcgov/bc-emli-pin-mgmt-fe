import { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'

// eslint-disable-next-line require-jsdoc
function TextArea(props) {
	const rootClass = 'text-area'
	const {
		textAreaId,
		textAreaName,
		textAreaPlaceholder,
		textAreaSubtext,
		textAreaLimit,
		isReadOnly,
		isRequired,
		errorMessage,
		value,
		onChange,
		isValid,
	} = props

	const [count, setCount] = useState(0)

	return (
		// <section className={rootClass}>
			<div className={`${rootClass}__container`}>
				<label htmlFor={textAreaId} className={`${rootClass}__text`}>
					<span>
						{textAreaName}
						{isRequired && !isReadOnly && (
							<span className={`${rootClass}__required-field`}>*</span>
						)}
					</span>
					<span className={`${rootClass}__sub-text`}>{textAreaSubtext}</span>
				</label>
				<textarea
					type="textarea"
					name={textAreaId}
					aria-multiline="true"
					id={textAreaId}
					placeholder={textAreaPlaceholder}
					className={`${rootClass}__box 
          ${!isValid ? `${rootClass}__error-div` : ''}`}
					value={value}
					disabled={isReadOnly}
					maxLength={textAreaLimit}
					required={isRequired}
					onChange={(e) => {
						setCount(e.target.value.length)
						onChange(e.target.value, e.target.name)
					}}
				/>
				<div className={`${rootClass}__footer`}>
					<div className={`${rootClass}__footer-text`}>
						{count}/{textAreaLimit}
					</div>
				</div>
				<div
					className={`${
						!isValid ? `${rootClass}__error-message` : `${rootClass}__hide-div`
					}`}
				>
					{errorMessage}
				</div>
			</div>
		// </section>
	)
}

TextArea.propTypes = {
	textAreaId: PropTypes.string.isRequired,
	textAreaName: PropTypes.string.isRequired,
	textAreaPlaceholder: PropTypes.string,
	textAreaSubtext: PropTypes.string,
	textAreaLimit: PropTypes.number,
	isReadOnly: PropTypes.bool,
	isRequired: PropTypes.bool,
	errorMessage: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	isValid: PropTypes.bool.isRequired,
}

TextArea.defaultProps = {
	textAreaPlaceholder: '',
	textAreaSubtext: '',
	textAreaLimit: 1000,
	isReadOnly: false,
	isRequired: false,
	errorMessage: '',
}

export default TextArea
