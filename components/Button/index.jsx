import propTypes from 'prop-types'
import Styles from './Button.module.css'

export const Button = ({
	variant,
	size,
	isDarkBackground,
	disabled,
	children,
	handleOnClick,
	...props
}) => {
	const backgroundStyle = isDarkBackground ? Styles.dark : '' 
	const buttonLevel = variant === 'primary' ? Styles.primary :  variant === 'secondary' ? Styles.primary : ''
    const className = Styles.btn + " " + buttonLevel + " " + backgroundStyle
	return (
		<button
			className={className}
			onClick={handleOnClick}
			type="button" name="button"
			aria-disabled={disabled}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	variant: propTypes.oneOf(['primary', 'secondary', 'danger']),
	size: propTypes.oneOf(['large', 'medium', 'small']),
	disabled: propTypes.bool,
	isDarkBackground: propTypes.bool,
	handleOnClick: propTypes.func,
}

Button.defaultProps = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
}
