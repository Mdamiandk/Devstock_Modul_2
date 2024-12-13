const StartQuiz= ({ onStartQuiz }) => {
    return (
      <div className="startDiv">
        <h1>JavaScript Quiz</h1>
        <button onClick={onStartQuiz}>Rozpocznij Quiz</button>
      </div>
    );
  };
  
  export default StartQuiz;