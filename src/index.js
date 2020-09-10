import React from 'react';
import ReactDOM from 'react-dom';
// 函数式组件，就是一个函数，接收一个属性对象，返回一个react元素
// 类组件，就是一个类，需要有一个render方法，render方法需要返回一个、并且仅能返回一个顶级react元素

// function Welcome1(props) {
// return <h1>hello,{props.name}</h1>
// }

class Person  extends React.Component {
  render() {
    return 
  }
}
let element = <Person />;
ReactDOM.render(element, document.getElementById('root'));
