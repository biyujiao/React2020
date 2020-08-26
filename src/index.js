import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import LifeCircle from './component/LifeCircle.js';
// import RefForm from './component/RefForm.js';
// import App from './component/AsyncState.js';
// import Form from './component/Form.js';
// import NewLifeCircle from './component/NewLifeCircle';
// import OldContext from './component/OldContext';
import Person from './component/PropTypes';

let props = {
    name: 'abc',
    age: 18,
    gender: 'man',
    isMarried: true,
    hobby: ['1', '2'],
    position: {x:100,y:100}
};

ReactDOM.render(<Person {...props}/>, document.getElementById('root'));

// ReactDOM.render(<Form name='爸爸'/>, document.getElementById('root'));