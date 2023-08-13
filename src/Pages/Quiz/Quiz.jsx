import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Quiz.module.scss";
import QuizStartScreen from "./QuizStartScreen";
import QuizActiveScreen from "./QuizActiveScreen";

import data from "../../data/data.json";
import QuizResult from "./QuizResult";

export default function Quiz() {
	const [activeScreen, setActiveScreen] = useState(false);
	const [resultScreen, setResultScreen] = useState(false);

	const quizData = data.questions;
	const totalQuestions = quizData.length;
	const maxPoints = quizData.reduce((prev, curr) => prev + curr.points, 0);

	console.log(maxPoints);

	return (
		<>
			<Navbar />
			{activeScreen ? (
				<QuizActiveScreen
					styles={styles}
					quizData={quizData}
					totalQuestions={totalQuestions}
					setResultScreen={setResultScreen}
					setActiveScreen={setActiveScreen}
				/>
			) : resultScreen && !activeScreen ? (
				<QuizResult />
			) : (
				<QuizStartScreen
					totalQuestions={totalQuestions}
					setActiveScreen={setActiveScreen}
				/>
			)}
		</>
	);
}
