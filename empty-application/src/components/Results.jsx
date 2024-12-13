const Results = ({
	score,
	totalQuestions,
	userAnswers,
	questions,
	onRestartQuiz,
}) => {
	const passingPercentage = (score / totalQuestions) * 100;
	const isPassed = passingPercentage >= 80;

	return (
		<div className='resultsDiv'>
			<h1 style={{ color: isPassed ? "green" : "red" }}>
				{isPassed
					? "Gratulacje! Quiz zaliczony"
					: "Niestety, nie zaliczyłeś quizu."}
			</h1>
			<p className="resultsP">
				Twój wynik to:{" "}
				<span
					style={{
						color: passingPercentage.toFixed(2) > 80 ? "green" : "red",
					}}>
					{passingPercentage.toFixed(2)}%{" "}
				</span>{" "}
				({score} z {totalQuestions} poprawnych odpowiedzi)
			</p>

			{questions.map((question, index) => {
				const userAnswer = userAnswers[index];
				const correctAnswer = question.answers.find(
					(answer) => answer.isCorrect
				).text;
				return (
					<div key={index}>
						<p className='questionResults'>
							<strong>{`Pytanie ${index + 1}: ${question.text}`}</strong>
						</p>
						<p>
							<strong color='white'>Twoja Odpowiedź:</strong>{" "}
							<span
								style={{
									color: userAnswer === correctAnswer ? "green" : "red",
								}}>
								{userAnswer}
							</span>
						</p>
					</div>
				);
			})}

			<button onClick={onRestartQuiz}>Rozpocznij quiz od nowa</button>
		</div>
	);
};

export default Results;