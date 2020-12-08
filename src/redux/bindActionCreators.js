function bindActionCreator(actionCreator, dispatch) {
    return function () {
        dispatch(actionCreator.apply(this,arguments));
    }
}

export default function bindActionCreators(actionCreators, dispatch) {
    // actionCreators是个函数时
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    // actionCreators是个对象时
    const boundActionCreators = {};
    for (const key in actionCreators) {
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;// 最终要返回新对象
}