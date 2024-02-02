import propTypes from 'prop-types'
import Styles from './Button.module.css'

export const Button = ({
	variant,
	size,
	isDarkBackground,
	isDanger,
	disabled,
	children,
	handleOnClick,
	buttonId,
	...props
}) => {
	const backgroundStyle = isDarkBackground ? Styles.dark : Styles.light 
	const dangerStyle = isDanger ? Styles.danger : ''
	const buttonLevel = variant === 'primary' ? Styles.primary : variant === 'secondary' 
	? Styles.secondary : variant === 'xlarge' ? Styles.xlarge : ''
    const className = Styles.btn + " " + buttonLevel + " " + backgroundStyle + " " + dangerStyle
	return (
		<button
			className={className}
			onClick={handleOnClick}
			type="button" name="button"
			aria-disabled={disabled}
			disabled={disabled}
			id={buttonId}
			{...props}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	variant: propTypes.oneOf(['primary', 'secondary', 'xlarge']),
	size: propTypes.oneOf(['large', 'medium', 'small']),
	disabled: propTypes.bool,
	isDarkBackground: propTypes.bool,
	isDanger: propTypes.bool,
	handleOnClick: propTypes.func,
}

Button.defaultProps = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
}
