import Person from "./Person"

const PeopleList = (props) => {
    // mapinti per gauta sarasa ir gaminti Person componentus
    
    return (
        <ul>
            {props.list.map((color) => (
            <Person key={color} name={color} />))}
           
        </ul>
    )
}
export default PeopleList