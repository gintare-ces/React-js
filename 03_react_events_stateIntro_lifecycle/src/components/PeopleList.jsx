import Person from "./Person"
import { useState } from 'react';


const PeopleList = (props) => {
    // mapinti per gauta sarasa ir gaminti Person componentus
    const zmoniuSk = props.list.length
    const hobiai = props.list.map((pObj) => pObj.hobby).join(', ')
    const [filtered, setFiltered] = useState('')
    
    let handleFiltered = () => {
        setFiltered(props.list.filter((pObj) => pObj.gender === filtered))
    }
    if (filtered === '') {
        handleFiltered = props.list
    }
    return (
        <div>
            <button onClick={() => setFiltered('male')}>Vyrai</button>
            <button onClick={() => setFiltered('female')}>Moterys</button>
        <ul>
            {props.list.map((personObj) => (
            <Person 
            key={personObj.id} 
            name={personObj.name} 
            age={personObj.age} 
            gender={personObj.gender} 
            hobby={personObj.hobby}
            />
            ))}
           
        </ul>
        <div className="info">
            <p>Viso zmoniu: {zmoniuSk}</p>
            
            <p>Visi zmoniu hobiai: {hobiai}</p>
          
        </div>
        </div>
    )
}
export default PeopleList