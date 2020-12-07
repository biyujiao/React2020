import React, { useState, useRef, memo, useMemo, useCallback } from "react";

/*function Counter1() {
    const [number, setNumber]=useState(0);
    const savedCallback = useRef();
    function alertNumber() {
        setTimeout(() => {
            // alert(number); //输出点击alertNumber之前的数字。
            alert(savedCallback.current); //输出最新的数字
        }, 2000);
    }
    return (
        <>
            <div>{number}</div>
            <button onClick={()=>{
                setNumber(number+1);
                savedCallback.current = number + 1;
                }} > + </button><br />
            <button onClick={alertNumber} > alertNumber </button>
        </>
    );
}
*/
function SubCounter({onBtnClick, data}) {
    console.log('subcounter render');
    return (
        <button onClick={onBtnClick}> subcounter: {data.number} </button>
    )
}
// 把此组件传递给memo之后，就会返回一个新组件，新组件有了一个功能：属性如果不变，则不重新渲染
SubCounter = memo(SubCounter);
function Counter() {
    console.log('counter');
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('haha');
    const data = useMemo(() => ({number}), [number]);
    const addClick = useCallback(() => setNumber(number => number+1), [number]);
    return (
        <>
            <p>Counter: {number}</p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <SubCounter data={data} onBtnClick={addClick}/>
        </>
    )
}
export default Counter;