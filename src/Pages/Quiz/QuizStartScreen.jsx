import React, { useContext } from "react";
import styles from "./Quiz.module.scss";
import { QuizContext } from "./Helpers/Context";

export default function QuizStartScreen() {
	const { totalQuestions, setActiveScreen } = useContext(QuizContext);

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
