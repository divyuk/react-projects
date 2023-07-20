function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((options) => (
        <button className="btn btn-option" key={options}>
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
