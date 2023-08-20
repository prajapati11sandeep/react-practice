import React, { useContext, useEffect } from "react";
import styles from "./Quiz.module.scss";
import { QuizContext } from "./Helpers/Context";

export default function QuizBody() {
	const { currQuestion, setActiveOption, activeOption, quizIndex } =
		useContext(QuizContext);

	const setOptionHandler = (e) => {
		setActiveOption(e.target.id);
	};

	useEffect(() => {
		setActiveOption(null);
	}, [quizIndex]);

	return (
		<div className={styles.quizBody}>
			<div className={styles.quizBodyInner}>
				<div className={styles.quizQuestion}>
					<strong>Q.</strong> {currQuestion.question}
					<span className={styles.quizPoints}>
						{currQuestion.points} Points
					</span>
				</div>
				<div className={styles.quizOptions}>
					<ul>
						{currQuestion.options.map((options, index) => (
							<li
								key={index}
								id={index}
								onClick={setOptionHandler}
								className={`${
									index === Number(activeOption) && activeOption !== null
										? "active"
										: ""
								}`}
							>
								<strong>{index + 1}.</strong> {options}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
