import PropTypes from 'prop-types'
import Image from 'next/image'
import './Header.module.css'
import Logo from '../../assets/images/logo-banner.jsx'
import Text from '../../text.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/fontawesome-svg-core'
import { DefaultAvatar } from '../../assets/images/Avatar.jsx'

export const Header = ({
	title, 
	userName, 
	userImagePath
}) => {

	const imagePath = userImagePath === null ? DefaultAvatar : userImagePath

	return (
		<div className='header-section'>
			<div className='logo-banner'>
				<div className='left'>
					<div className='image-wrap'>
						<Image src={Logo} alt={Text.header.logo}/>
					</div>
					<div className='title'>
						{title}
					</div>
				</div>
				<div className='right'>
					<div className='user-section'>
						<div className='user-image-wrap'>
							<Image src={imagePath} alt={Text.header.avatar}/>
						</div>
						<div className='user-name-wrap'>
							{userName}
						</div>
					</div>
					<div className='help-section'>
						<div className='icon-wrap'>
							<FontAwesomeIcon icon={faCircleQuestion} />
						</div>
						<div className='content-wrap'>Help</div>
					</div>
					<div className='logout-section'>
						{Text.header.logout}
					</div>
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
	userName: Text.header.testusername,
}

