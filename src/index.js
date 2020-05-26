import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

let name = 'my world';
function greet(name) {
    if(name) {
        return <h1>hello, {name}</h1>
    } else {
        return <h1>hello stranger</h1>
    }
}
let element = greet(name);
ReactDOM.render(element,document.getElementById('root'));
// serviceWorker.unregister();