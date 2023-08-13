import React from "react";
import styles from "./Quiz.module.scss";

export default function QuizHeader({ totalQuestions, quizIndex }) {
	const percentage = ((quizIndex + 1) * 100) / totalQuestions;

	return (
		<div className={styles.quizHeader}>
			<div className={styles.quizLogo}>Quiz App</div>
			<div className={styles.quizProgress}>
				<div className={styles.totalQuestions}>
					Question : <strong>{quizIndex + 1}</strong> / {totalQuestions}
				</div>
				<div className={styles.progress}>
					<div
						className={styles.progressBar}
						style={{ width: `${percentage}%` }}
					></div>
				</div>
			</div>
		</div>
	);
}
