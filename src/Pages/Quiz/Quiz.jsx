import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Quiz.module.scss";
import QuizStartScreen from "./QuizStartScreen";
import QuizActiveScreen from "./QuizActiveScreen";

import data from "../../data/data.json";

export default function Quiz() {
	const [activeScreen, setActiveScreen] = useState(false);

	const quizData = data.questions;
	const totalQuestions = quizData.length;

	return (
		<>
			<Navbar />
			{activeScreen ? (
				<QuizActiveScreen
					styles={styles}
					quizData={quizData}
					totalQuestions={totalQuestions}
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
