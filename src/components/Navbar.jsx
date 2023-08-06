import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<NavLink to="/">
							<i className="bi bi-house-fill"></i>
							&nbsp; Home
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
