import PropTypes from 'prop-types'
import Styles from './Header.module.css'
import CleanBCLogo from '../../assets/svgs/CleanBCLogo'
import Text from '../../assets/content/content.json'
import UserIcon from '../../assets/svgs/UserIcon'
import QuestionIcon from '../../assets/svgs/QuestionIcon'
import Endpoints from '../../apiManager/endpoints'


function Header  ({
	userName,
})  {

	const onClickHandle = () => {
		window.open(`${Endpoints.support.SUPPORT_URL}`, "_black", "noreferrer")
	}

	const helpSectionClass = userName === '' ? Styles.helpSection : Styles.helpSection + " " + Styles.marginRight
	return (
		<div className={`${Styles.headerSectionWrap}` + " headerFooterWrap flex justify-center"}>
			<div className={`${Styles.headerSection}`}>
				<div className={`${Styles.logoBanner}`}>
					<div className={`${Styles.left}`}>
						<div className={`${Styles.imageWrap}`}>
							<CleanBCLogo />
						</div>
					</div>
					<div className={`${Styles.right}`}>
						{
							userName &&
							<div>
								<button className={`${Styles.helpButton}` + " " + helpSectionClass} onClick={onClickHandle}>
									<div className={`${Styles.iconWrap}`}>
										<QuestionIcon />
									</div>
									<div className={`${Styles.contentWrap}`}>{Text.header.help}</div>
								</button>
							</div>
						}
						<div className={`${Styles.flexWrap}` + ' ' + 'flex'}>
						{
							userName &&
							<div className={`${Styles.userSection + ' ' + Styles.marginRight}`}>
								<div className={`${Styles.userImageWrap}`}>
									<UserIcon />
								</div>
								<div className={`${Styles.userNameWrap}`}>
									{userName}
								</div>
							</div>
						}
						{
							userName &&
							<div className={`${Styles.helpSection}`}>
							<button onClick={() => (window.location = Endpoints.auth.LOGOUT)} >
								{Text.header.logout}
							</button>
							</div>
						}
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

Header.protoTypes = {
	userName: PropTypes.string,
}

export default  Header;

