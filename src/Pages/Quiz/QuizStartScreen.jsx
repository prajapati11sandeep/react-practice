import React from "react";
import styles from "./Quiz.module.scss";

export default function QuizStartScreen({ totalQuestions, setActiveScreen }) {
	return (
		<div className={styles.StartScreen}>
			<h1>Welcome to the React Quiz!</h1>
			<h4>{totalQuestions} Questions to test your React Skills</h4>
			<button onClick={() => setActiveScreen(true)}>
				Let's Get Started <i className="bi bi-arrow-right"></i>
			</button>
		</div>
	);
}
