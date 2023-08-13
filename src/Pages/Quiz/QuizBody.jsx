import React from "react";
import styles from "./Quiz.module.scss";

export default function QuizBody({ question, setActiveOption, activeOption }) {
	const setOptionHandler = (e) => {
		setActiveOption(e.target.id);
	};

	return (
		<div className={styles.quizBody}>
			<div className={styles.quizBodyInner}>
				<div className={styles.quizQuestion}>
					<strong>Q.</strong> {question.question}
				</div>
				<div className={styles.quizOptions}>
					<ul>
						{question.options.map((options, index) => (
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
