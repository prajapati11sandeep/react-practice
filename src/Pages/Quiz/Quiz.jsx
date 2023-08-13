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
	const [quizIndex, setQuizIndex] = useState(0);

	const quizData = data.questions;
	const totalQuestions = quizData.length;
	const maxPoints = quizData.reduce((prev, curr) => prev + curr.points, 0);

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
					quizIndex={quizIndex}
					setQuizIndex={setQuizIndex}
				/>
			) : resultScreen && !activeScreen ? (
				<QuizResult
					maxPoints={maxPoints}
					setQuizIndex={setQuizIndex}
					setResultScreen={setResultScreen}
					setActiveScreen={setActiveScreen}
				/>
			) : (
				<QuizStartScreen
					totalQuestions={totalQuestions}
					setActiveScreen={setActiveScreen}
				/>
			)}
		</>
	);
}
