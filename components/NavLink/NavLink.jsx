import Link from 'next/link'
import PropTypes from 'prop-types';
import Styles from './NavLink.module.css'
import Text from '../../assets/content/content.json'
import { usePathname } from "next/navigation";
import React, { Children } from "react";

export default function NavLink ({
	showToClientSupport,
	children,
	keyInfo,
	role,
	...props
}) {

	const asPath = usePathname();
	const showLink = role === "admin" ? true : role === "cms" && showToClientSupport ? true : false
  //const requestAccessStyle = role === '' ? Styles.linkWrapMax : Styles.linkWrap;

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
