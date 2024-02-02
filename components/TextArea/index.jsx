import PropTypes from 'prop-types'
import styles from './TextArea.module.css'

// eslint-disable-next-line require-jsdoc
function TextArea(props) {
	const rootClass = 'text-area'
	const {
		textAreaId,
		textAreaName,
		textAreaPlaceholder,
		textAreaLimit,
		isReadOnly,
		isRequired,
		errorMessage,
		value,
		onChange,
		isValid,
	} = props


	return (
    <div className={styles.container}>
      <label htmlFor={textAreaId} className={styles.text}>
        <span>
          {textAreaName}
          {isRequired && !isReadOnly && (
            <span className={styles.requiredField}> *</span>
          )}
        </span>
      </label>
      <textarea
        type="textarea"
        name={textAreaId}
        aria-multiline="true"
        id={textAreaId}
		data-testid="text-area"
        placeholder={textAreaPlaceholder}
        className={`${styles.box}
        ${!isValid ? styles.error : ''}`}
        value={value}
        disabled={isReadOnly}
        maxLength={textAreaLimit}
        required={isRequired}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
	)
}

TextArea.propTypes = {
	textAreaId: PropTypes.string.isRequired,
	textAreaName: PropTypes.string.isRequired,
	textAreaPlaceholder: PropTypes.string,
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
	textAreaLimit: 1000,
	isReadOnly: false,
	isRequired: false,
	errorMessage: '',
}

export default TextArea
