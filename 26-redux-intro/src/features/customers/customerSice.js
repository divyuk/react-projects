// More state | Customer
const initialStateCustomer = {
  fullName: "",
  nationlID: "",
  createdAt: "",
};

// For Customer The reducer function

export default function customerReducer(state = initialStateCustomer, action) {
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

//! Action Creator for Customer

export function createCustomer(fullName, nationlID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationlID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payLoad: fullName };
}
