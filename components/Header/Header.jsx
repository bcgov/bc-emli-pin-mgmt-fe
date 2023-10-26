import PropTypes from 'prop-types'
import Styles from './Header.module.css'
import CleanBCLogo from '../../assets/svgs/CleanBCLogo'
import Text from '../../assets/content/content.json'
import UserIcon from '../../assets/svgs/UserIcon'
import QuestionIcon from '../../assets/svgs/QuestionIcon'
import Endpoints from '../../apiManager/endpoints'
import GlobalStyles from '../../styles/globals.module.css'


function Header  ({
	title,
	userName,
})  {

	const onClickHandle = () => {
		window.open(Text.header.helpLink, "_black", "noreferrer")
	}
	return (
		<div className={`${Styles.headerSectionWrap + " " + GlobalStyles.headerFooterWrap + " " + GlobalStyles.flex + " " + GlobalStyles.justifyCenter}`}>
			<div className={`${Styles.headerSection}`}>
				<div className={`${Styles.logoBanner}`}>
					<div className={`${Styles.left}`}>
						<div className={`${Styles.imageWrap}`}>
							<CleanBCLogo />
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
						<div className={`${Styles.helpSection}`} onClick={onClickHandle}>
							<div className={`${Styles.iconWrap}`}>
								<QuestionIcon />
							</div>
							<div className={`${Styles.contentWrap}`}>{Text.header.help}</div>
						</div>
						<div className={`${Styles.helpSection}`}>
							<button onClick={() => (window.location = Endpoints.auth.LOGOUT)} >
								{Text.header.logout}
							</button>
						</div>
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

