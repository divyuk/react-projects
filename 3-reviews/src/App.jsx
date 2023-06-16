// import { useState } from "react";
// import { FaBeer } from 'react-icons/fa';
// import reviews from "./data";
// import Person from "./Person";
// export default function App(){

//   const [person , setPerson] = useState(reviews);

//   return(
//     <main>
 
//     {person.map(
//       (ele)=><Person {...ele} />
//     )}
    
//   </main>
//   );
// } 






import React from 'react';
import Person from './Person';
import reviews from './data'; // Import the reviews array

const App = () => {
  return (
    <main>
      
      <Person reviews={reviews} />
    </main>
  );
}

export default App;
