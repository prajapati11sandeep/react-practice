import React, { useContext } from "react";
import styles from "./Quiz.module.scss";
import QuizTimer from "./QuizTimer";
import { QuizContext } from "./Helpers/Context";

export default function QuizFooter() {
	const {
		totalQuestions,
		quizIndex,
		setQuizIndex,
		question,
		setResultScreen,
		setActiveScreen,
	} = useContext(QuizContext);

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
