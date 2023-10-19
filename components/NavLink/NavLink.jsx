import Link from 'next/link'
import Styles from './NavLink.module.css'
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink ({
	showToClientSupport,
	children,
	keyInfo,
	role,
	...props
}) {

	const asPath = usePathname();
	const showLink = role === "Admin" ? true : role === "Standard" && showToClientSupport ? true : false
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
