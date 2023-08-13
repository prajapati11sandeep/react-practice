import React from "react";
import styles from "./Quiz.module.scss";
import QuizTimer from "./QuizTimer";

export default function QuizFooter({
	totalQuestions,
	quizIndex,
	setQuizIndex,
	question,
	setActiveOption,
}) {
	const nextQuestionHandler = () => {
		setQuizIndex(quizIndex + 1);
		setActiveOption(null);
	};
	return (
		<div className={styles.quizFooter}>
			<div className={styles.quizTime}>
				<i className="bi bi-stopwatch"></i>{" "}
				<QuizTimer
					quizIndex={quizIndex}
					setQuizIndex={setQuizIndex}
					question={question}
				/>
			</div>
			<div className={styles.quizAction}>
				{totalQuestions !== quizIndex + 1 ? (
					<button onClick={nextQuestionHandler}>Next</button>
				) : (
					<button>Finish</button>
				)}
			</div>
		</div>
	);
}
