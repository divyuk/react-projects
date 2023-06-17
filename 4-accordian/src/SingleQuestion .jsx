import { useState } from "react"

export default function SingleQuestion ({id,title,info}){
    const[answer, showAnswer] = useState(false);
    const toggler = ()=>showAnswer(!answer);
    return(
        <article className="question">
      <header >
            <h5>{title}</h5>
                <button onClick={toggler} className="question-btn">{answer ? '-' : '+'}</button>
            </header>
                <p> { answer && info } </p>
    </article>
    
    
    )
}