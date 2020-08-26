import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Counter extends Component {
    static defaultProps = {
        name: '默认属性'
    };
    constructor(props) {
        super(props);
        this.state = {number: 0}
    }
    handleClick=()=>{
        this.setState({number: this.state.number+1});
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> + </button>
                <p>Counter: {this.state.number}</p>
                <ChildCounter num={this.state.number}/>
            </div>
        )
    }
}
class ChildCounter extends Component {
    constructor() {
        super();
        this.state = {num: 0};
    }
    // getDerivedStateFromProps: 将传入的props映射到state上面
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, 'nextprops');
        console.log(prevState, 'prevState');
        const {num} = nextProps;
        if (num) {
            return num;
        } else {
            return null;
        }
    }

    render() {
        console.log(this.state, 'child');
        return (
            <div>ChildCounter: {this.state.num}</div>
        )
    }
}
