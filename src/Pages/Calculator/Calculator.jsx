import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import style from "./Calculator.module.scss";
import { useState } from "react";

export default function Calculator() {
	const [result, setResult] = useState("");

	useEffect(() => {
		if (result === "+" || result === "-" || result === "/" || result === "*") {
			setResult("");
		} else if (result === "..") {
			setResult(".");
		} else if (result === "00") {
			setResult("0");
		}
	}, [result]);

	const handleClick = (e) => {
		setResult(result + e.target.name);
	};

	const clear = () => {
		setResult("");
	};

	const backspace = () => {
		setResult(result.slice(0, -1));
	};

	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (err) {
			alert("Please select correct operations");
		}
	};

	return (
		<>
			<Navbar />
			<div className={style.clcContainer}>
				<div className={style.clcInner}>
					<form>
						<input type="text" value={result} placeholder="0" disabled />
					</form>
					<div className={style.keyPad}>
						<div className={style.numbers}>
							<button
								className={style.clearBtn}
								type="button"
								onClick={clear}
								id="clear"
							>
								Clear
							</button>
							<button type="button" onClick={backspace} id="backspace">
								C
							</button>
							<button
								type="button"
								className={style.info}
								name="+"
								onClick={handleClick}
							>
								+
							</button>
							<button type="button" name="0" onClick={handleClick}>
								0
							</button>
							<button type="button" name="1" onClick={handleClick}>
								1
							</button>
							<button type="button" name="2" onClick={handleClick}>
								2
							</button>
							<button
								type="button"
								className={style.info}
								name="-"
								onClick={handleClick}
							>
								&ndash;
							</button>
							<button type="button" name="3" onClick={handleClick}>
								3
							</button>
							<button type="button" name="4" onClick={handleClick}>
								4
							</button>
							<button type="button" name="5" onClick={handleClick}>
								5
							</button>
							<button
								type="button"
								className={style.info}
								name="*"
								onClick={handleClick}
							>
								&times;
							</button>
							<button type="button" name="6" onClick={handleClick}>
								6
							</button>
							<button type="button" name="7" onClick={handleClick}>
								7
							</button>
							<button type="button" name="8" onClick={handleClick}>
								8
							</button>
							<button
								type="button"
								className={style.info}
								name="/"
								onClick={handleClick}
							>
								&divide;
							</button>
							<button type="button" name="9" onClick={handleClick}>
								9
							</button>
							<button type="button" name="." onClick={handleClick}>
								.
							</button>
							<button
								type="button"
								className={`${style.success} ${style.resultBtn}`}
								name="="
								onClick={calculate}
							>
								=
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
