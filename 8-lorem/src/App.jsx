import { useState } from "react";
import text from "./data";

export default function App(){
  const [count,setCount] = useState(1);
  const [data , setdata] = useState([]);

  const handlerCount = (inputValue)=>{
    setCount(Number(inputValue.target.value));
  }

  const handlerSubmit = (e)=>{
    e.preventDefault();
    const generated = text.slice(0,count);
    setdata(generated);
    
  }
  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className="lorem-form" onSubmit={handlerSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input onChange={handlerCount} type="number" name="amount" id="amount" min="1" step="1" max="8" value={count} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {data.map( (item,index) =>(
          <p key={index}>{item}</p>
        ) )}
      </article>
    </section>
  );
}