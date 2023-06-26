import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';
export default function Duties({duties}){
    // return(
    //     <div>
    //         {duties.map((duty,index)=>{
    //             const id = uuidv4();
    //             return(<div key={id} className='job-desc'>
    //             <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
    //             <p>{duty}</p>
    //           </div>  )  
    //         })
    //         }
    //     </div>
    // )
    return (
        <div>
          {duties.map((duty, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </div>
      );
}