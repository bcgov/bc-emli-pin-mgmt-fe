import PropTypes from 'prop-types'
import Styles from './Footer.module.css'
import Text from '../../content.json'
import Link from 'next/link'

export default function Footer ({
	links
}) {

	return (
		<div className={`${Styles.footerSectionWrap}` + " headerFooterWrap flex justify-center"}>
			<div className={`${Styles.footerSection}`}>
				{
					links.map((item) => (
						// eslint-disable-next-line react/jsx-key
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
			href: ''
		},
		{
			index: 3, 
			name: Text.footer.disclaimer, 
			href: '', 
		}, 
		{
			index: 4, 
			name: Text.footer.privacy, 
			href: '', 
		}, 
		{
			index: 5, 
			name: Text.footer.copyright, 
			href: '', 
		}, 
		{
			index: 6, 
			name: Text.footer.accessibility, 
			href: '',
		},
		{
			index: 7, 
			name: Text.footer.contact, 
			href: '',
		}
	]
}

