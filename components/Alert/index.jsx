import Warning from 'assets/svgs/WarningIcon'
import Cross from 'assets/svgs/CrossIcon'
import CheckCircle from 'assets/svgs/CheckCircle'
import ErrorIcon from 'assets/svgs/ErrorIcon'
import ExpiredIcon from 'assets/svgs/ExpiredIcon'
import { IconButton } from '../IconButton'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export const Alert = ({
	type,
	show,
	message,
	className,
	isDissmissable,
	onClickReset,
	children,
}) => {
	const [showAlert, setShowAlert] = useState(show)

	useEffect(() => {
		setShowAlert(show)
	}, [show])

	// const displayText = (
	// 	<>
	// 		<span
	// 			className="text-fixed regular med-7 mb-0"
	// 			dangerouslySetInnerHTML={{ __html: message }}
	// 		/>
	// 		{children}
	// 	</>
	// )
	return (
		<>
			{showAlert && (
				<div
					className={`bc-gov-alertbanner-${type} bc-gov-alertbanner`}
					role="alert"
					aria-labelledby={`${type}`}
					aria-describedby={`${type}-desc`}
				>
					<p id={`${type}-desc`}
					>
						{children}	
					</p>
				</div>
			)}
		</>
	)
}

Alert.protoTypes = {
	/** @type {string} type of the alert ex: 'error' or 'success'.*/
	type: PropTypes.oneOf(['error', 'success', 'warning', 'danger', 'expired'])
		.isRequired,
	/** @type {boolean} to show or hide the alert.*/
	show: PropTypes.bool.isRequired,
	/** @type {string} message to be displayed in the alert.*/
	message: PropTypes.string.isRequired,
	/** @type {string} css classes for Alert.*/
	className: PropTypes.string,
	onClickReset: PropTypes.func,
	isDissmissable: PropTypes.bool,
	/** @type {element} content/body of button following up the display text.*/
	children: PropTypes.element,
}

Alert.defaultProps = {
	type: 'error',
	show: true,
	isDissmissable: true,
	message: 'test test',
}

Alert.displayName = 'Alert'
