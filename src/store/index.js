import { createStore } from '../redux';
import * as types from './action-types';

let initState = {number: 1};
function reducer(state = initState, action) {
    switch(action.type) {
        case types.ADD:
            return { number: state.number + (action.amount || 1) };
        case types.MINUS:
            return {number: state.number - 1};
        default:
            // 如果此action.type的 此reducer不能识别，或者不能处理，则返回老的state
            return state;
    }
}
let store = createStore(reducer);
export default store;