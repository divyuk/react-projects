import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
