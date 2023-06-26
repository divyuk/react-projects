export default function BtnContainer({jobs,currentItem,setCurrentItem}){
    return(
        <div className="btn-container">
            {jobs.map((item,index)=>{
                return(
                    <button key={item.id}
                    onClick={()=>setCurrentItem(index)}
                    >{item.company}</button>
                )
            })

            }

        </div>
    )
}