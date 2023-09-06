import Link from 'next/link'
import PropTypes from 'prop-types';
import Styles from './NavLink.module.css'
import Text from '../../content.json'
import { usePathname } from "next/navigation";
import React, { Children } from "react";

function NavLink ({
	showToClientSupport, 
	children, 
	keyInfo, 
	role, 
	...props
}) {

	const asPath = usePathname();
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

export default NavLink;