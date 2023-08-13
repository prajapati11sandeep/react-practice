import React, { useState } from "react";
import styles from "./Quiz.module.scss";
import QuizFooter from "./QuizFooter";
import QuizBody from "./QuizBody";
import QuizHeader from "./QuizHeader";

export default function QuizActiveScreen({
	quizData,
	totalQuestions,
	setResultScreen,
	setActiveScreen,
	quizIndex,
	setQuizIndex,
}) {
	const [activeOption, setActiveOption] = useState(null);

	return (
		<div className={styles.quizWrapper}>
			<QuizHeader totalQuestions={totalQuestions} quizIndex={quizIndex} />
			<QuizBody
				question={quizData[quizIndex]}
				setActiveOption={setActiveOption}
				activeOption={activeOption}
			/>
			<QuizFooter
				totalQuestions={totalQuestions}
				quizIndex={quizIndex}
				setQuizIndex={setQuizIndex}
				question={quizData[quizIndex]}
				setActiveOption={setActiveOption}
				setResultScreen={setResultScreen}
				setActiveScreen={setActiveScreen}
			/>
		</div>
	);
}
