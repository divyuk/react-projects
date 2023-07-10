import Bill from "./Bill";
import Service from "./Service";
import { useState } from "react";
import TotalBill from "./TotalBill";
import Reset from "./Reset";
function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const total = (bill * ((tip1 + tip2) / 2)) / 100;

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} handleBill={setBill} />
      <Service tip={tip1} handleTip={setTip1}>
        How did you like the service?
      </Service>
      <Service tip={tip2} handleTip={setTip2}>
        How did your friend like the service?
      </Service>
      <TotalBill bill={bill} tip={total} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;
