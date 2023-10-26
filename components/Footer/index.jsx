import Styles from './Footer.module.css'
import Text from '../../assets/content/content.json'
import Link from 'next/link'
import GlobalStyles from '../../styles/globals.module.css'

export default function Footer ({
	links
}) {

	return (
		<div className={`${Styles.headerSectionWrap + " " + GlobalStyles.headerFooterWrap + " " + GlobalStyles.flex + " " + GlobalStyles.justifyCenter}`}>
			<div className={`${Styles.footerSection}`}>
				{
					links.map((item) => (
						<div className={`${Styles.linkWrap}`} key={item.index}>
							<Link href={item.href}>{item.name}</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}


Footer.defaultProps = {
	links: [
		{
			index: 1, 
			name: Text.footer.home, 
			href: '/home'
		}, 
		{
			index: 2, 
			name: Text.footer.about, 
			href: Text.footer.aboutLink
		},
		{
			index: 3, 
			name: Text.footer.disclaimer, 
			href: Text.footer.disclaimerLink 
		}, 
		{
			index: 4, 
			name: Text.footer.privacy, 
			href: Text.footer.privacyLink 
		}, 
		{
			index: 5, 
			name: Text.footer.accessibility, 
			href: Text.footer.accessibilityLink
		},
		{
			index: 6, 
			name: Text.footer.copyright, 
			href: Text.footer.copyrightLink
		}, 
		{
			index: 7, 
			name: Text.footer.contact, 
			href: Text.footer.contactLink
		}
	]
}

