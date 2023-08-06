import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";

import styles from "./Homepage.module.scss";

export default function Homepage() {
	return (
		<div>
			<Navbar />
			<div className={styles.homePage}>
				<div className={styles.listGroup}>
					<NavLink to="calculator">Calculator</NavLink>
				</div>
			</div>
		</div>
	);
}
