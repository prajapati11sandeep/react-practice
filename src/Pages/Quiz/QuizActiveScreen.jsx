import React from "react";
import styles from "./Quiz.module.scss";
import QuizFooter from "./QuizFooter";
import QuizBody from "./QuizBody";
import QuizHeader from "./QuizHeader";

export default function QuizActiveScreen() {
	return (
		<div className={styles.quizWrapper}>
			<QuizHeader />
			<QuizBody />
			<QuizFooter />
		</div>
	);
}
