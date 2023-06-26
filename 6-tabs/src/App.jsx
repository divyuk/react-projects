import { useEffect, useState } from "react";
import Loading from "./Loading";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [data, setData] = useState([]);
  // let data = [];
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        
      }
      catch(err){
        console.log("Error in fetching" , err);
      }
    } 
    fetchData()
  }, []);

  return( 
  <section className="jobs-center">
    {/* <Loading/> */}
    <BtnContainer jobs={data}
      currentItem = {currentItem}
       setCurrentItem={setCurrentItem} />

    <JobInfo jobs={data} currentItem={currentItem} />
  </section>
  );
};
export default App;
