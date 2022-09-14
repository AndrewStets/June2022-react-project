export default function Simpson(props) {
    let {itemName,pic} = props;

    return (<div className='simpy'>
            <h2>{itemName}</h2>
            <img src={pic} className='images'/>
        </div>
    );
};