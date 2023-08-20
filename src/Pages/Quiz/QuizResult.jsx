import React, { useContext } from "react";
import styles from "./Quiz.module.scss";
import { QuizContext } from "./Helpers/Context";

export default function QuizResult() {
	const { maxPoints, setQuizIndex, setResultScreen, setActiveScreen, answers } =
		useContext(QuizContext);

	const resultPoints = answers.reduce(
		(prev, curr) =>
			prev + (curr.selectedAnswer === curr.correctOption ? curr.points : 0),
		0
	);

	const percentage = Math.round((resultPoints * 100) / maxPoints);

	let emoji;
	if (percentage === 100) emoji = "🥇";
	if (percentage >= 80 && percentage < 100) emoji = "🎉";
	if (percentage >= 50 && percentage < 80) emoji = "🙃";
	if (percentage >= 0 && percentage < 50) emoji = "🤨";
	if (percentage === 0) emoji = "🤦‍♂️";

	const restartTest = () => {
		setQuizIndex(0);
		setResultScreen(false);
		setActiveScreen(false);
	};
	return (
		<>
			<div className={styles.quizResult}>
				<div className={styles.quizResultInner}>
					<h1>Quiz Result</h1>
					<h4>
						Your Score: <br />
						<br />
						{resultPoints}/{maxPoints} = {percentage}% {emoji}
					</h4>
				</div>
				<p className={styles.copyText}>Match your answers: </p>
				<div className={styles.quizResultWrapper}>
					{answers.map((question) => (
						<div className={styles.quizBody} key={question.question}>
							<div
								className={`${styles.quizBodyInner} ${
									question.selectedAnswer === null ? "notAnswered" : ""
								}`}
							>
								<div className={styles.quizQuestion}>
									<strong>Q.</strong> {question.question}
									<span className={styles.quizPoints}>
										{question.points} Points
									</span>
								</div>
								<div className={styles.quizOptions}>
									<ul>
										{question.options.map((options, index) => (
											<li
												key={index}
												className={`${
													question.selectedAnswer === index
														? "selectedAnswer"
														: ""
												} ${index === question.correctOption ? "active" : ""}`}
											>
												<strong>{index + 1}.</strong> {options}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
				<button onClick={restartTest}>Restart Test</button>
			</div>
		</>
	);
}
