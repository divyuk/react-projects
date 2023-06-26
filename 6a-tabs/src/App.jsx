import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

export default function App(){
  const fetchAPI = async ()=>{
    try{
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }
    catch(err){
      console.log("--Failed--" , err);
    }
  }
  const [data , setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect( ()=>{fetchAPI()} , [] )
  return (
      <section className='jobs-center'>
        <BtnContainer jobs={data} currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <JobInfo jobs = {data} currentItem={currentItem}/>
      </section>
  )
} 
