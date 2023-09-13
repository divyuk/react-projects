import { useReducer } from "react";

const initalState = {
  count: 10,
  push: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "addvalue":
      return {
        ...state,
        push: action.payload,
      };
    case "valueAdded":
      return {
        ...state,
        count: state.count + state.push,
        push: 0,
      };
    default:
      return initalState;
  }
};
function Counter() {
  const [state, dispatch] = useReducer(reducer, initalState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "valueAdded", payload: Number(e.target.value) });
  }
  function handleChange(e) {
    const value = Number(e.target.value) || 0;
    dispatch({ type: "addvalue", payload: value });
  }
  return (
    <main>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <label>{state.count}</label>

      <form onSubmit={handleSubmit}>
        <input type="number" value={state.push} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}

export default Counter;
