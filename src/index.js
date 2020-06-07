import React from 'react';
import ReactDOM from 'react-dom';

class Welcome2 extends React.Component {
  render() {
    return <h1>hello {this.props.name}----  {this.props.age}</h1>;
  }
}
/****
 * 
let data = { name:'biyujiao', age: 25};
let element = (
  <h1 className="title" style={{color: 'red', fontSize: '24px'}}>
    你好 , <span>world</span>
  </h1>
);
 * 
*/
let ele = React.createElement("h1", {
    className: "title",
    style: {
      color: 'red',
      fontSize: '24px'
    }
  }, "hello", React.createElement("span", null, "world")
)
ReactDOM.render( ele, document.getElementById('root'));