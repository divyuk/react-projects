
import { useState } from 'react'
import {FaQuoteRight } from 'react-icons/fa'
import {FcNext, FcPrevious} from 'react-icons/fc'
export default function Person({reviews}){
    const [currentPersonIndex, setCurrentPerson] = useState(0);
    const currentPerson = reviews[currentPersonIndex];

    const handlerNext = ()=>{
        setCurrentPerson ((nextState)=>(nextState===reviews.length-1 ? 0 :nextState+1))
    }
    const handlerPrevious=()=>{
        setCurrentPerson((prevState)=>(prevState===0 ? reviews.length-1 : prevState-1))
    }

    const handlerSurprise=()=>{
        const rdn = Math.floor(Math.random()*reviews.length);
        console.log(rdn)
        setCurrentPerson((state)=>( rdn ) )
    }

    return(
        <div className="review">

        <div className="img-container  ">
        <img className="person-img  " src={currentPerson.image} alt={currentPerson.id} />
        <span className="quote-icon"><FaQuoteRight/></span>
        </div>
        <h2>{currentPerson.name}</h2>
        <h3 className="job">{currentPerson.job}</h3>
        <p  className="info ">{currentPerson.text}</p>

        <FcPrevious className='prev-btn'  onClick={handlerPrevious}/>
        <FcNext className='next-btn' onClick={handlerNext}/>
        <div>
        <button onClick={handlerSurprise}  className='btn btn-container'>Surprise me</button>
        </div>
        </div>
    )
}


