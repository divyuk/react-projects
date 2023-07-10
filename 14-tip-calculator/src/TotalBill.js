export default function TotalBill({ bill, tip }) {
  return (
    <>
      {bill ? (
        <h3>
          Your total Payable amount is {bill + tip} (₹{bill} + ₹{tip} tip)
        </h3>
      ) : (
        ""
      )}
    </>
  );
}
