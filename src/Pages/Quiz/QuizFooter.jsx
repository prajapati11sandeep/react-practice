import React from "react";
import styles from "./Quiz.module.scss";
import QuizTimer from "./QuizTimer";

export default function QuizFooter({
	totalQuestions,
	quizIndex,
	setQuizIndex,
	question,
	setResultScreen,
	setActiveScreen,
}) {
	const nextQuestionHandler = () => {
		setQuizIndex(quizIndex + 1);
	};
	const finishQuizHandler = () => {
		setResultScreen(true);
		setActiveScreen(false);
	};
	return (
		<div className={styles.quizFooter}>
			<div className={styles.quizTime}>
				<i className="bi bi-stopwatch"></i>{" "}
				<QuizTimer
					quizIndex={quizIndex}
					setQuizIndex={setQuizIndex}
					question={question}
					totalQuestions={totalQuestions}
					setResultScreen={setResultScreen}
					setActiveScreen={setActiveScreen}
				/>
			</div>
			<div className={styles.quizAction}>
				{totalQuestions !== quizIndex + 1 ? (
					<button onClick={nextQuestionHandler}>Next</button>
				) : (
					<button className="quizFinish" onClick={finishQuizHandler}>
						Finish
					</button>
				)}
			</div>
		</div>
	);
}
