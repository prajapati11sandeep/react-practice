import React from "react";
import styles from "./Quiz.module.scss";

export default function QuizResult({
	maxPoints,
	setQuizIndex,
	setResultScreen,
	setActiveScreen,
}) {
	const restartTest = () => {
		setQuizIndex(0);
		setResultScreen(false);
		setActiveScreen(false);
	};
	return (
		<div className={styles.quizResult}>
			<h1>Quiz Result</h1>
			<h4>0/{maxPoints}</h4>
			<button onClick={restartTest}>Restart Test</button>
		</div>
	);
}
