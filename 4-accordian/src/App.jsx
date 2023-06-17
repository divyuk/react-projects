import { useState } from "react";
import questions from "./data";
import SingleQuestion  from "./SingleQuestion ";
const App = () => {
  // const [question, setQuesion] = useState(questions);
  return (
    
      <main>
        <div className="container">
          <h1>Questions</h1>
      {questions.map(
      (singlequestion)=> 
      <SingleQuestion key={singlequestion.id}  {...singlequestion}/>
     )}
      </div>
      </main>  

  );

};
export default App;
