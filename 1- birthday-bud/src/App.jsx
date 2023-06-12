import List from './List';
import data from './data'
import { useState } from 'react';

export default function  App(){
  
  const [people , setMypeople] = useState(data);

  const handler = ()=>{ 
    setMypeople([])
  };
  return (
    <>
      <main>
        <section className='container'>
          <h1> {people.length} Birthday Today </h1>
            <List people={people}/>
            <button onClick={handler} className='btn'> Clear all</button>
      </section>
      </main>
    </>
  );
  
}