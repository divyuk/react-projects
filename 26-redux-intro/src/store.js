import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSice";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// ? We need to combine multiple reducers to make it one reducer called rootReducer.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
