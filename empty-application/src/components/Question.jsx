const Question = ({ question, onSubmitAnswer }) => {
	return (
		<div>
			<h3>{`Pytanie ${question.id}: ${question.text}`}</h3>
			<div className='questionButtons'>
				{question.answers.map((answer, index) => (
					<button
						key={index}
						onClick={() => onSubmitAnswer(answer.text)}
						style={{
							backgroundColor: "lightblue",
							margin: "5px",
							padding: "10px",
						}}>
						{answer.text}
					</button>
				))}
			</div>
		</div>
	);
};

export default Question;