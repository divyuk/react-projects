function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentagePoints = (points / totalPoints) * 100;
  let emoji;
  if (percentagePoints === 100) emoji = "🥇";
  if (percentagePoints >= 80 && percentagePoints < 100) emoji = "🎉";
  if (percentagePoints >= 50 && percentagePoints < 80) emoji = "🙃";
  if (percentagePoints >= 0 && percentagePoints < 50) emoji = "🤨";
  if (percentagePoints === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {totalPoints}
        {"  "}
        {Math.ceil(percentagePoints)}%
      </p>
      <p className="highscore">Highscore: {highScore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
