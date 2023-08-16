import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

//NOt allowed to modify existing state and perform  async operations.
function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit": // state_name/event_name'
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw": // state_name/event_name'
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: "account/deposit", payload: 500 });

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "Buy a car" },
});

store.dispatch({ type: "account/payloan" });

console.log(store.getState());
