export default function Duties({duties}){
    return(
        <>
        {duties.map((duty=><p>{duty}</p>))}
        </>
    )
}