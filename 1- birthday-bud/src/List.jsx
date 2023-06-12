import Person from "./Person"
export default function List({people}){
    return(
        <div>
            {people.map((person)=> <Person key={person.id} {...person} />  )}
        </div>
    )
}