import * as types from '../action-types';

let initState = {name: '计算器', number: 1};

export default function reducer(state = initState, action) {
    switch(action.type) {
        case types.ADD1:
            ///...state： 返回值会直接覆盖老状态，但不会合并到老状态上去
            return { ...state, number: state.number + (action.amount || 1) };
        case types.MINUS1:
            return {...state, number: state.number - 1};
        default:
            // 如果此action.type的 此reducer不能识别，或者不能处理，则返回老的state
            return state;
    }
}