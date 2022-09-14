import Simpson from "../simpsons/simpson";

export default function Simpsons() {
    return (<div className='simp-all'>
            <Simpson
                itemName={'Homer'}
                pic={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson
                itemName={'Bart'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <Simpson
                itemName={'Marge'}
                pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson
                itemName={'Lisa'}
                pic={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
            <Simpson
                itemName={'Maggie'}
                pic={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

