import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Snapshot.module.scss";
import data from "../../data/data.json";

export default function Snapshot() {
	const inputRef = useRef(null);

	const [filter, setFilter] = useState("all");
	const [isValid, setIsValid] = useState(true);
	const [filterResults, setFilterResults] = useState(data.snapshot);
	const [inputVal, setInputVal] = useState(null);

	useEffect(() => {
		if (filter === "all") {
			setFilterResults(data.snapshot);
		} else {
			const filtered = data.snapshot.filter((images) => {
				return images.imageCategory === filter;
			});
			setFilterResults(filtered);
		}
	}, [filter]);

	//On filter button click
	const filterClickHandler = (e) => {
		setFilter(e.target.name);
		setIsValid(true);
	};

	//On input value change
	const inputChangeHandler = () => {
		setIsValid(true);
	};

	//filtering all categories from data
	const getImageCategory = [
		...new Set(data.snapshot.map((snap) => snap.imageCategory)),
	];

	//On search button click
	const searchClickHandler = (e) => {
		if (inputRef.current.value.trim().length !== 0) {
			const val = inputRef.current.value.toLowerCase();
			const matches = data.snapshot.filter((snap) =>
				snap.imageCategory.toLowerCase().includes(val)
			);
			setInputVal(inputRef.current.value);
			setFilterResults(matches);
		} else {
			setIsValid(false);
			alert("Input is empty");
		}
	};

	return (
		<>
			<Navbar />
			<div className={styles.snapshotContainer}>
				<div className={styles.snapshotTitle}>
					<h1>SnapShot</h1>
				</div>
				<div className={`${styles.snapshotInput} ${isValid ? "" : "error"}`}>
					<input
						type="text"
						placeholder="Search image here"
						ref={inputRef}
						onChange={inputChangeHandler}
					/>
					<button onClick={searchClickHandler}>
						{isValid ? (
							<i className="bi bi-search"></i>
						) : (
							<i className="bi bi-exclamation-circle"></i>
						)}
					</button>
				</div>
				{getImageCategory && (
					<div className={styles.snapshotFilters}>
						<ul>
							<li>
								<button
									name="all"
									className={filter === "all" ? "active" : ""}
									onClick={filterClickHandler}
								>
									all
								</button>
							</li>
							{getImageCategory.map((imgCat) => (
								<li key={imgCat}>
									<button
										name={imgCat}
										className={filter === `${imgCat}` ? "active" : ""}
										onClick={filterClickHandler}
									>
										{imgCat}
									</button>
								</li>
							))}
						</ul>
					</div>
				)}
				<div className={styles.snapshotFilterTitle}>
					"{inputVal ? inputVal : filter}" Images
				</div>
				<div className={styles.snapshotImages}>
					{filterResults.length !== 0 ? (
						<ul>
							{filterResults.map((image) => (
								<li key={image.id}>
									<img src={image.imagePath} alt="" />
								</li>
							))}
						</ul>
					) : (
						<div className={styles.noResultFound}>
							<i> No Result Found</i>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
