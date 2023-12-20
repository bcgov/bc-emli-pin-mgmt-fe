import PropTypes from 'prop-types';
import Styles from './Navigation.module.css'
import Text from '../../assets/content/content.json'
import React from "react";
import NavLink from '../NavLink/NavLink';

export default function Navigation ( props) {
  const {
    role,
	links,
    isUserRegistered,
  } = props;

  const requestAccessTab = {
      index: 1,
			name: Text.navigation.requestaccessform,
			href: '/request-access',
			active: true,
			showToClientSupport: true,
  }

	return (
		<div className={`${Styles.navigationSectionWrap}` + ' flex justify-center'}>
			<div className={`${Styles.navigationSection}`}>
				{
					isUserRegistered && links.map((item) => (
						<NavLink href={item.href} showToClientSupport={item.showToClientSupport} showToSuperAdminOnly={item.showToSuperAdminOnly}
							key={item.index} role={role} alt_route={item.alt_route}>
							{item.name}
						</NavLink>
					))
				}
        {
          !isUserRegistered &&
          <NavLink href={requestAccessTab.href} showToClientSupport={requestAccessTab.showToClientSupport}
							key={requestAccessTab.index} role={role}>
							{requestAccessTab.name}
						</NavLink>
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
			alt_route: '/property-search',
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
    {
			index: 4,
			name: Text.navigation.dashboard,
			href: '/dashboard',
			active: false,
			showToClientSupport: false,
			showToSuperAdminOnly: true,
		},

	],
	role: 'cms',
  isUserRegistered: false,
}
