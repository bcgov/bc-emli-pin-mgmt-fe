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
							<button onClick={() => (window.location = Endpoints.auth.LOGOUT)} >
								{Text.header.logout}
							</button>
						}
						
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

