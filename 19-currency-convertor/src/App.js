import { useEffect, useState } from "react";
import "./index.css";
export default function App() {
  const [money, setMoney] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [out, setOut] = useState("");
  useEffect(
    function () {
      async function fetchData() {
        if (fromCurrency === toCurrency) {
          setOut(1);
          return;
        }
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${money}&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await res.json();
          console.log(data.rates[toCurrency]);
          setOut(data.rates[toCurrency]);
          // throw new Error("Please check");
        } catch (err) {
          console.log(err.message);
          setMoney(0);
        }
      }
      fetchData();
    },
    [money, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={money}
        onChange={(e) => setMoney(Number(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {out} {toCurrency}
      </p>
    </div>
  );
}
