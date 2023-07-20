import propTypes from 'prop-types'
import './styles.css'

export const Button = ({
	variant,
	size,
	isDarkBackground,
	disabled,
	children,
	handleOnClick,
	...props
}) => {
	const disabledStyle = disabled ? '-disabled' : ''
	const backgroundStyle = isDarkBackground ? '-Dark' : '' 
	const buttonLevel = variant === 'primary' ? 'SecondaryButton' :  variant === 'secondary' ? 'SecondaryButton' : ''
	return (
		<button
			className={`BC-Gov-${buttonLevel}${backgroundStyle}${disabledStyle}`}
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
