// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import {createStore} from './redux';

let counterVal = document.getElementById('counter-value');
let addBtn = document.getElementById('add');
let minusBtn = document.getElementById('minus');
const INCREMENT = 'incre';
const DECREMENT = 'decre';

// 状态可以使任何类型的值
let initState = 5;

// redux action必须是一个纯对象 {type: ADD'} new Object(),不能是function、Array()
function reducer(state = initState, action) {
    console.log(action);// {type: "incre"}
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
let store = createStore(reducer, 10);
// store = {getState,  subscribe, dispatch}
// 把仓库中的状态存放到counter-value这个p标签里面


function render() {
    counterVal.innerHTML = store.getState();
}
render();

// 订阅：每当向仓库派发动作之后，就会调用render方法，使用最新的状态值刷新界面。
store.subscribe(render);
// 派发
addBtn.addEventListener('click', function() {
    store.dispatch({type: INCREMENT});
    render();
});

minusBtn.addEventListener('click', function() {
    store.dispatch({type: DECREMENT});
    render();
});
// 取消订阅
// let unsubscribe = store.subscribe(render);
// console.log(unsubscribe());
// setTimeout(() => {
//     unsubscribe();
// }, 3000);

