import { FaQuoteRight } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useEffect } from 'react';
export default function Carousel({slide,currentPerson,setCurrentPerson}){
    const {id,image,name,title,quote} = slide[currentPerson];
    const handlerNext = ()=>{
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson + 1) % slide.length;
            return result;
          });
        };
        const handlerPrev = ()=>{
            setCurrentPerson((oldPerson) => {
                const result = (oldPerson - 1 + slide.length) % slide.length;
                return result;
            });
        };
        console.log(currentPerson)

    useEffect(() => {
        let sliderId = setInterval(() => {
            handlerNext();
        }, 5000);
        return () => {
            clearInterval(sliderId);
          };
      }, [currentPerson]);


    return (
        <div className="slide">
            <img className="person-img" src={image} alt={id} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className='icon'/>
           
            <GrFormNext onClick={handlerNext} className='next'/>
            <GrFormPrevious onClick={handlerPrev} className='prev'/>
            
        </div>
    )
}