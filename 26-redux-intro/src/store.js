import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// More state | Customer
const initialStateCustomer = {
  fullName: "",
  nationlID: "",
  createdAt: "",
};

//NOt allowed to modify existing state and perform  async operations.
function accountReducer(state = initialStateAccount, action) {
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
    case "account/payLoan":
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

// For Customer The reducer function

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationlID: action.payload.nationlID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

// ? We need to combine multiple reducers to make it one reducer called rootReducer.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// This is the store for account
const store = createStore(rootReducer);

// In older codebases this was there.
const ACCOUNT_DEPOSIT = "account/deposit";

//! Action Creator
function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(100));
store.dispatch(requestLoan(1000));
store.dispatch(payLoan());
// console.log(store.getState());

//! Action Creator for Customer

function createCustomer(fullName, nationlID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationlID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "account/updateName", payLoad: fullName };
}

store.dispatch(createCustomer("Divyanshu Kesarwani", "23121331"));
console.log(store.getState());
