import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Person from './component/PropTypes';
// import NewContext from './component/context/NewContext';
import Pure from './component/pure/Pure';

let props = {
    name: 'abc',
    age: 18,
    gender: 'man',
    isMarried: true,
    hobby: ['1', '2'],
    position: {x:100,y:100}
};

ReactDOM.render(<Pure/>, document.getElementById('root'));

// ReactDOM.render(<Form name='爸爸'/>, document.getElementById('root'));
