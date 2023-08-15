import React from "react";
import styles from "./Quiz.module.scss";
import QuizFooter from "./QuizFooter";
import QuizBody from "./QuizBody";
import QuizHeader from "./QuizHeader";

export default function QuizActiveScreen({
	totalQuestions,
	setResultScreen,
	setActiveScreen,
	quizIndex,
	setQuizIndex,
	activeOption,
	setActiveOption,
	currQuestion,
}) {
	return (
		<div className={styles.quizWrapper}>
			<QuizHeader totalQuestions={totalQuestions} quizIndex={quizIndex} />
			<QuizBody
				question={currQuestion}
				setActiveOption={setActiveOption}
				activeOption={activeOption}
				quizIndex={quizIndex}
			/>
			<QuizFooter
				totalQuestions={totalQuestions}
				quizIndex={quizIndex}
				setQuizIndex={setQuizIndex}
				question={currQuestion}
				setResultScreen={setResultScreen}
				setActiveScreen={setActiveScreen}
			/>
		</div>
	);
}
