import PropTypes from 'prop-types'
import { testAttr } from '../../utils/test.utils'
import styles from './RadioButton.module.css'

export default function RadioButton({
	hasError = false,
	isDisabled = false,
	radioButtonId,
	radioButtonName,
	radioButtonLabel,
	setSelectedValue,
	selectedValue,
	onChangeHandler,
  	value,
	size,
	...props
}) {
	const rootClass = 'radio-button'

	const applySelectedRadio = (selected) => {
		setSelectedValue(selected)
	}


	return (
		<section className={rootClass}>
			<div className={`${styles.container}`}>
				<input 
					{...testAttr(radioButtonId)}
					type="radio"
					id={radioButtonId} 
					name={radioButtonName}
					value={value}
					className={`${
						hasError ? styles.alert : ''
					}`} 
					checked={value===selectedValue}
					onChange={(e) => applySelectedRadio(e.target.value)} 
					disabled={isDisabled}
					{...props} >
				</input>
				<label
					htmlFor={radioButtonId}
					className={`${styles.label} ${styles.text} ${
						hasError ? `error-label` : isDisabled ? styles.textDisabled : ''
					}`}
					disabled={isDisabled}
				>
					{radioButtonLabel}
				</label>
			</div>
		</section>
	)
}

RadioButton.propTypes = {
	hasError: PropTypes.bool,
	isDisabled: PropTypes.bool,
	radioButtonId: PropTypes.string.isRequired,
	radioButtonName: PropTypes.string.isRequired,
	radioButtonLabel: PropTypes.string.isRequired,
	selectedValue: PropTypes.string,
	setSelectedValue: PropTypes.func,
	onChangeHandler: PropTypes.func,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}
