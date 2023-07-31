import PropTypes from 'prop-types'
import './styles.css'

export const Footer = ({
	links
}) => {

	return (
		<div className='footer-section'>
			{
				links.map((item) => (
					// eslint-disable-next-line react/jsx-key
					<div className='link-wrap'>
						<a href='{item.href}'>{item.name}</a>
					</div>
				))
			}
		</div>
	)
}


Footer.defaultProps = {
	links: [
		{
			name: 'Home', 
			href: ''
		}, 
		{
			name: 'Copyright', 
			href: '', 
		}, 
		{
			name: 'Disclaimer', 
			href: '', 
		}, 
		{
			name: 'Privacy', 
			href: '', 
		}, 
		{
			name: 'Accessibility', 
			href: '',
		}
	]
}

