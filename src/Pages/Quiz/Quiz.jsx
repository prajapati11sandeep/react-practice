import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import QuizStartScreen from "./QuizStartScreen";
import QuizActiveScreen from "./QuizActiveScreen";

import data from "../../data/data.json";
import QuizResult from "./QuizResult";

import { QuizContext } from "./Helpers/Context";

export default function Quiz() {
	const [activeScreen, setActiveScreen] = useState(false);
	const [resultScreen, setResultScreen] = useState(false);
	const [quizIndex, setQuizIndex] = useState(0);
	const [activeOption, setActiveOption] = useState(null);

	const [answers, setAnswers] = useState([]);

	const quizData = data.questions;
	const totalQuestions = quizData.length;
	const maxPoints = quizData.reduce((prev, curr) => prev + curr.points, 0);
	const currQuestion = quizData[quizIndex];

	useEffect(() => {
		updateAnswer();
	}, [activeOption, quizIndex]);

	const updateAnswer = () => {
		let newAnswers = answers;
		newAnswers[quizIndex] = {
			...currQuestion,
			selectedAnswer: activeOption !== null ? Number(activeOption) : null,
		};
		setAnswers(newAnswers);
	};

	return (
		<>
			<Navbar />
			<QuizContext.Provider
				value={{
					totalQuestions,
					setActiveScreen,
					setResultScreen,
					quizIndex,
					setQuizIndex,
					activeOption,
					setActiveOption,
					currQuestion,
					maxPoints,
					answers,
				}}
			>
				{activeScreen ? (
					<QuizActiveScreen />
				) : resultScreen && !activeScreen ? (
					<QuizResult />
				) : (
					<QuizStartScreen />
				)}
			</QuizContext.Provider>
		</>
	);
}
