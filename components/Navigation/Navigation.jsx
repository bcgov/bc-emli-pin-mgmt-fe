import Link from 'next/link'
import PropTypes from 'prop-types';
import Styles from './Navigation.module.css'
import Text from '../../content.json'
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import React, { Children } from "react";
import NavLink from '../NavLink/NavLink';

function Navigation ({
	role,
	links
}) {

	return (
		<div className={`${Styles.navigationSectionWrap}` + ' flex justify-center'}>
			<div className={`${Styles.navigationSection}`}>
				{
					links.map((item) => (
						<NavLink href={item.href} showToClientSupport={item.showToClientSupport}
							key={item.index} role={role}>
							{item.name}
						</NavLink>
					))
				}
			</div>
		</div>
	)
}

Navigation.protoTypes = {
	// currentPath: PropTypes.string.required
	role: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
}

Navigation.defaultProps = {
	links: [
		{
			index: 1, 
			name: Text.navigation.home, 
			href: '/home', 
			active: true, 
			showToClientSupport: true,
		}, 
		{
			index: 2, 
			name: Text.navigation.usermanagement, 
			href: '/user-management', 
			active: false, 
			showToClientSupport: false
		}, 
		{
			index: 3, 
			name: Text.navigation.accessrequest, 
			href: '/access-request', 
			active: false, 
			showToClientSupport: false,
		}, 

	], 
	role: 'cms'
}

  export default Navigation;