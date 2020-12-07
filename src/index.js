// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import {createStore} from './redux';

let initState = 0;
const INCREMENT = 'incre';
const DECREMENT = 'decre';

function reducer(state = initState, action) {
    console.log(action);// {type: "incre"}
    switch(action.type) {
        case INCREMENT:
            return state + 2;
        case DECREMENT:
            return state - 2;
        default:
            return state;
    }
}
let store = createStore(reducer);
let counterVal = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');

function render() {
    counterVal.innerHTML = store.getState();
}
render();

// 取消订阅
// let unsubscribe = store.subscribe(render);
// console.log(unsubscribe());
// setTimeout(() => {
//     unsubscribe();
// }, 3000);

incrementBtn.addEventListener('click', function() {
    store.dispatch({type: INCREMENT});
    render();
});

decrementBtn.addEventListener('click', function() {
    store.dispatch({type: DECREMENT});
    render();
});