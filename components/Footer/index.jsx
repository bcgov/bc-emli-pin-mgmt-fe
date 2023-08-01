import PropTypes from 'prop-types'
import './Footer.module.css'
import Text from '../../text.json'

export const Footer = ({
	links
}) => {

	return (
		<div className='footer-section'>
			{
				links.map((item) => (
					// eslint-disable-next-line react/jsx-key
					<li className='link-wrap'>
						<a href='{item.href}'>{item.name}</a>
					</li>
				))
			}
		</div>
	)
}


Footer.defaultProps = {
	links: [
		{
			name: Text.footer.home, 
			href: ''
		}, 
		{
			name: Text.footer.copyright, 
			href: '', 
		}, 
		{
			name: Text.footer.disclaimer, 
			href: '', 
		}, 
		{
			name: Text.footer.privacy, 
			href: '', 
		}, 
		{
			name: Text.footer.accessibility, 
			href: '',
		}
	]
}

