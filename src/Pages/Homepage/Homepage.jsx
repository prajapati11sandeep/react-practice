import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";

import styles from "./Homepage.module.scss";

export default function Homepage() {
	return (
		<>
			<Navbar />
			<div className={styles.homePage}>
				<div className={styles.listGroup}>
					<NavLink to="calculator">Calculator</NavLink>
					<NavLink to="snapshot">Snapshot</NavLink>
				</div>
			</div>
		</>
	);
}
