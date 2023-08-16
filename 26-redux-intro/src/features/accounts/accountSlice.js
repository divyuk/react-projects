const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
//NOt allowed to modify existing state and perform  async operations.
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit": // state_name/event_name'
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
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
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

//! Action Creator
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  // If the currency is differnt we need to make an API call to do
  // the conversion
  // Writing a thunk function for dispatching an action...
  // This function will be called by the redux
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    // API call
    const host = "api.frankfurter.app";
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    // return action
    dispatch({ type: "account/deposit", payload: converted });
  };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
