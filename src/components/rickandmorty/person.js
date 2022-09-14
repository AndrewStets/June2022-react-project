export default function Person(props) {
    let {item: person} = props;

    return (<div className='pers'>
            <h3>{person.id}-{person.name}</h3>
            <p>{person.status} <br/> {person.species} <br/> {person.gender}</p>
            <img src={person.image} className='image'/>
        </div>
    );
};
