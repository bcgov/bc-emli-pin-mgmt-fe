import PropTypes from 'prop-types'
import Image from 'next/image'
import './Header.module.css'
import Logo from '../../assets/images/logo-banner.svg'
import Text from '../../text.json'

export const Header = ({
	title
}) => {

	return (
		<div className='header-section'>
			<div className='logo-banner'>
				<div className='left'>
					<div className='image-wrap'>
						<Image src={Logo} alt={text.header.logo_alt} />
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
	/** @type {string} the Application name.*/
	title: PropTypes.bool.isRequired,
}

Header.defaultProps = {
	title: Text.header.title,
}

