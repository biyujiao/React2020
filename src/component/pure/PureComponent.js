import React, {Component} from 'react';

export default class PureComponent extends Component {
    
    isPureComponent = true;
    // 传入新的属性对下行和状态对象，返回一个表示是否需要更新的boolean值
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
}
// 浅比较
function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
