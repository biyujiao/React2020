import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import Person from './component/PropTypes';
// import NewContext from './component/context/NewContext';
// import Pure from './component/pure/Pure';
// import Logger from './component/high/Logger';
// import MouseTracker from './component/render-props/MouseTracker';
// import Picture from './component/render-props/Picture';

function Counter() {
    let [number, setNumber]=useState(0);
    return (
        <>
            <div>{number}</div>
            <button onClick={()=>setNumber(number+1)} > + </button>
        </>
    );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
/* render-props

ReactDOM.render(<MouseTracker render={
    (props)=>{
        return (
            <Picture {...props}/>
        )
    }
}/>, document.getElementById('root'));
*/

// ReactDOM.render(<Logger name="Logger名字"/>, document.getElementById('root'));

// ReactDOM.render(<Form name='爸爸'/>, document.getElementById('root'));
