export default function Person(props) {
    let {item: person} = props;

    return (<div className='pers'>
            <h2>{person.id}-{person.name}</h2>
            <p>{person.status} <br/> {person.species} <br/> {person.gender}</p>
            <img src={person.image}/>
        </div>
    );
};
