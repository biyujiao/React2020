import counter1 from './counter1';
import counter2 from './counter2';
// import { combineReducers } from 'redux';
let reducers = {
    counter1,
    counter2
};
let reducer = combineReducers(reducers);
export default reducer;
// 传进一个对象reducers,返回一个函数
function combineReducers() {
    let reducerKeys = Object.keys(reducers); // [a, b]
    // 从老的状态state和action计算新的状态
    return function (state = {}, action) {//返回的就是合并后的reducer
        const nextState = {};//新状态对象，总状态就是各个reducer 计算出来的状态之和
        for(let key of reducerKeys) {
            let reducerValue = reducers[key];
            let previousStateForKey = state[key]; //key=a的上一个状态
            let nextStateForKey = reducerValue(previousStateForKey, action); //state[key] = {name: '计算器', number:1}
            nextState[key] = nextStateForKey;
        }
        
        return nextState;
    }
}

