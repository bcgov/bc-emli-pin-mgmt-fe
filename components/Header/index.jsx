import PropTypes from 'prop-types'
import './styles.css'
import image from '../../assets/images/logo-banner.svg'

export const Header = ({
	bannerContent, 
	title
}) => {

	return (
		<div className='header-section'>
			<div className='light-bule-banner'>
				{bannerContent}
			</div>
			<div className='logo-banner'>
				<div className='left'>
					<div className='image-wrap'>
						<img src={image} alt='logo'></img>
					</div>
					<div className='title'>
						{title}
					</div>
				</div>
				<div className='right'> 
					<i className='fa-solid fa-bars'></i>
				</div>
			</div>
		</div>
	)
}

Header.protoTypes = {
	/** @type {string} type of the alert ex: 'error' or 'success'.*/
	bannerContent: PropTypes.oneOf(['error', 'success', 'warning', 'danger', 'expired'])
		.isRequired,
	/** @type {boolean} to show or hide the alert.*/
	title: PropTypes.bool.isRequired,
	/** @type {string} message to be displayed in the alert.*/
	imagePath: PropTypes.string.isRequired,
}

Header.defaultProps = {
	bannerContent: 'Get your booster',
	title: 'CleanBC',
}

