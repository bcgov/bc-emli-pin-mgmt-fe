import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './Header.module.css'
import CleanBCLogo from '../../assets/svgs/CleanBCLogo'
import Text from '../../content.json'
import UserIcon from '../../assets/svgs/UserIcon'
import QuestionIcon from '../../assets/svgs/QuestionIcon'

function Header  ({
	title,
	userName,
})  {

	return (
		<div className={`${Styles.headerSection}`}>
			<div className={`${Styles.logoBanner}`}>
				<div className={`${Styles.left}`}>
					<div className={`${Styles.imageWrap}`}>
						<CleanBCLogo />
					</div>
					<div className={`${Styles.title}`}>
						{title}
					</div>
				</div>
				<div className={`${Styles.right}`}>
					<div className={`${Styles.userSection}`}>
						<div className={`${Styles.userImageWrap}`}>
							<UserIcon />
						</div>
						<div className={`${Styles.userNameWrap}`}>
							{userName}
						</div>
					</div>
					<div className={`${Styles.helpSection}`}>
						<div className={`${Styles.iconWrap}`}>
							<QuestionIcon />
						</div>
						<div className={`${Styles.contentWrap}`}>{Text.header.help}</div>
					</div>
					<div className={`${Styles.helpSection}`}>
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
	userName: PropTypes.string,
}

Header.defaultProps = {
	title: Text.header.title,
	userName: Text.header.testusername,
}

export default  Header;
