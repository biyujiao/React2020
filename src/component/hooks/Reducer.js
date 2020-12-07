import React, {useReducer, createContext, useContext} from "react";


const initState = 0;
// 只在初始化时执行
function init(initialState) {
    return {number: initialState};
}
// 在触发事件时执行
function reducer(state = initState, action){
    switch(action.type) {
        case 'increase':
            return {number: state.number + 1 };
        case 'decrease':
            return {number: state.number - 1 };
        default:
            break;
    }
}


let CounterContext = createContext();
function SubCounter() {
    const {state, dispatch} = useContext(CounterContext);
    return (
        <>
        <p>输出：{state.number}</p>
        <button onClick={() => dispatch({type:'increase'})}>+</button>
        <button onClick={() => dispatch({type:'decrease'})}>-</button>
        </>
    );
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initState, init);
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            <SubCounter />
        </CounterContext.Provider>
    );
}
export default Counter;