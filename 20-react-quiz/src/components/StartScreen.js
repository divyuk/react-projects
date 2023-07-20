function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz!!</h2>
      <h3>{numQuestions} questions to check your mastery in React</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Lets's Go
      </button>
    </div>
  );
}

export default StartScreen;
