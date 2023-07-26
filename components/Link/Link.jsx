import PropTypes from 'prop-types'

import styles from './Link.module.css'

export default function Link({
	linkId,
	children,
	variant,
	size,
	...props
}) {
	return (
		<a
			id={linkId}
			className={`${styles.contanier} ${styles[variant]} ${styles[size]}`}
			{...props}
		>
			{children}
		</a>
	)
}

Link.propTypes = {
	linkId: PropTypes.node.isRequired,
	isDisabled: PropTypes.bool,
	variant: PropTypes.oneOf([
		'primary',
		'secondary',
		'danger',
		'success',
		'disabled',
	]),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
}

Link.defaultProps = {
	variant: 'primary',
	size: 'medium',
}
