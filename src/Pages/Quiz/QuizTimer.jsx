import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "./Helpers/Context";

export default function QuizTimer() {
	const {
		currQuestion,
		setQuizIndex,
		quizIndex,
		totalQuestions,
		setResultScreen,
		setActiveScreen,
	} = useContext(QuizContext);

	const [time, setTime] = useState(currQuestion.time);
	const [warning, setWarning] = useState(false);

	const mins = Math.floor(time / 60);
	const seconds = Number(time) % 60;

	useEffect(
		function () {
			const id = setInterval(function () {
				if (time !== 0) {
					setTime(() => time - 1);
					if (time < 11) {
						setWarning(true);
					}
				} else {
					clearInterval(id);
					if (totalQuestions !== quizIndex + 1) {
						setQuizIndex(quizIndex + 1);
					} else {
						setResultScreen(true);
						setActiveScreen(false);
					}
				}
			}, 1000);
			return () => clearInterval(id);
		},
		[
			time,
			quizIndex,
			setQuizIndex,
			setResultScreen,
			totalQuestions,
			setActiveScreen,
		]
	);

	useEffect(() => {
		setTime(currQuestion.time);
		setWarning(false);
	}, [currQuestion]);

	return (
		<>
			<span className={warning ? "warning" : ""}>
				{mins < 10 && "0"}
				{mins}:{seconds < 10 && "0"}
				{seconds}
			</span>
		</>
	);
}
