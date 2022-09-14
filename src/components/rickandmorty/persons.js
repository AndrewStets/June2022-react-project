import {useState} from "react";
import Person from "./person";
import {persons} from "./data";
export default function Persons() {
    // let [persons, setPersons] = useState([]);
    //
    // fetch(`https://rickandmortyapi.com/api/character`)
    //     .then(value => value.json())
    //     .then(value => {
    //         setPersons(value);
    //     });

    return (<div className='pers-all'>
            <div className='personal'>{persons.map(person => <Person item={person} key={person.id}/>)}</div>
        </div>
    );
};