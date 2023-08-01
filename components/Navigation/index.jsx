import Link from 'next/link'
import './Navigation.module.css'
import Text from '../../text.json'


export const Navigation = ({
	links
}) => {

	return (
		<div className='navigation-section'>
			{
				links.map((item) => (
					// eslint-disable-next-line react/jsx-key
					<li className={"link-wrap" + (item.active ? " active" : "")}>
						<Link href='{item.href}' className='link'>
							{item.name}
						</Link>
					</li>
				))
			}
		</div>
	)
}


Navigation.defaultProps = {
	links: [
		{
			name: Text.Navigation.home, 
			href: '', 
			active: true
		}, 
		{
			name: Text.Navigation.usermanagement, 
			href: '', 
			active: false
		}, 
		{
			name: Text.Navigation.accessrequest, 
			href: '', 
			active: false
		}, 

	]
}

