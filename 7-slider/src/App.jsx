import { useState } from "react"
import Carousel from "./Carousel";
import { list } from "./data"

export default function App(){
  const [slides,setSlides] = useState(list);
  const [currentPerson, setCurrentPerson]=useState(0);
  return(
    <div className="slide-container">
        <Carousel slide={slides} currentPerson={currentPerson} 
        setCurrentPerson={setCurrentPerson}/>
    </div>
  )
}