import Link from 'next/link'
import Styles from './NavLink.module.css'
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink ({
	showToClientSupport,
	children,
	keyInfo,
	role,
	alt_route,
	...props
}) {

	const asPath = usePathname();
	const showLink = (role === "Admin" || role === "SuperAdmin") ? true : role === "Standard" && showToClientSupport ? true : false

	// check the current url and give the correct class name
	const className = asPath === props.href || asPath === props.as || asPath === alt_route
		?  Styles.linkWrap + " " + Styles.active : Styles.linkWrap

	if (showLink){
		return (
			<ul>
				<li className={className} key={keyInfo}>
					<Link href={props.href}>
						{children}
					</Link>
				</li>
			</ul>
		);
	}
}
