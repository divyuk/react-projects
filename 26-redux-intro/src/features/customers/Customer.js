import { useSelector } from "react-redux";

function Customer() {
  // useSelector provides subscription to the store when in the store
  // any value changes this gets re-render.
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
