import { useState } from 'react'
import PropTypes from 'prop-types'

import { testAttr } from '../../utils/test.utils'

import './style.css'

export default function CheckBox({
	checkboxId,
	checkboxName,
	checkboxLabel,
	isDisabled,
	hasError,
}) {
	const [isChecked, setIsChecked] = useState(false)
	// const rootClass = 'check-box'

	return (
		// <section className={rootClass}>
			<label class="checkbox">
				{checkboxLabel}
				<input
					{...testAttr(checkboxId)}
					id={checkboxId}
					name={checkboxName}
					checked={isChecked}
					type="checkbox"
					aria-checked={isChecked}
					disabled={isDisabled}
					onChange={(e) => setIsChecked(!isChecked)}
					aria-invalid={hasError}
				/>
				<span
					htmlFor={checkboxId}
					className="checkmark"
				>
				</span>
			</label>
		// </section>
	)
}

CheckBox.propTypes = {
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	checkboxId: PropTypes.string.isRequired,
	checkboxLabel: PropTypes.string.isRequired,
	checkboxName: PropTypes.string.isRequired,
}
