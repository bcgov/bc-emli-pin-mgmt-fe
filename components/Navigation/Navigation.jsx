import Link from 'next/link'
import PropTypes from 'prop-types';
import Styles from './Navigation.module.css'
import Text from '../../content.json'
import { useRouter } from "next/router";
import React, { Children } from "react";

function Navigation ({
	role,
	links
}) {

	return (
		<>
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
		</>
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

function NavLink({ showToClientSupport, children, keyInfo, role, ...props}) {
	const { asPath } = useRouter();
	// check user role for different tabs
	const showLink = role === "admin" ? true : role === "cms" && showToClientSupport ? true : false

	// check the current url and give the correct class name
	const className = asPath === props.href || asPath === props.as
		?  Styles.linkWrap + " " + Styles.active : Styles.linkWrap

	if (showLink){
		return (
			<li className={className} key={keyInfo}>
				<Link href={props.href}>
					{children}
				</Link>
			</li>
		);
	}
  }

  export default Navigation;