import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Snapshot.module.scss";
import data from "../../data/data.json";

export default function Snapshot() {
	const inputRef = useRef(null);

	const [filter, setFilter] = useState("all");

	const getFilter = (e) => {
		setFilter(e.target.name);
	};

	const searchResult = (e) => {
		if (inputRef.current.value !== "") {
			setFilter(inputRef.current.value);
		} else {
			alert("Input is empty!!");
		}
	};

	const imageCategory = [...new Set(data.snapshot.map((q) => q.imagecategory))];

	return (
		<>
			<Navbar />
			<div className={styles.snapshotContainer}>
				<div className={styles.snapshotTitle}>
					<h1>SnapShot</h1>
				</div>
				<div className={styles.snapshotInput}>
					<input type="text" placeholder="Search image here" ref={inputRef} />
					<button onClick={searchResult}>
						<i className="bi bi-search"></i>
					</button>
				</div>
				<div className={styles.snapshotFilters}>
					<ul>
						{imageCategory.map((imgCat) => (
							<li key={imgCat}>
								<button
									name={imgCat}
									className={filter === `${imgCat}` ? "active" : ""}
									onClick={getFilter}
								>
									{imgCat}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.snapshotFilterTitle}>"{filter}" Images</div>
				<div className={styles.snapshotImages}>
					<ul>
						{data.snapshot.map((image) => (
							<li key={image.id}>
								<img src={image.imagepath} alt="" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
