import React from 'react';

class Son extends React.Component {
    constructor(props) {
        super(props);
        // this.state={text: '123'}
    }
    render() {
        return (
            <>
            <div> 父亲的值: {this.props.fatherText} , 父亲的名字: {this.props.fatherName}</div>
            <input ref="refSon"/>
            <button onClick={() => this.props.changeFather(this.refs.refSon.value)}>改变父亲的值</button>
            </>
        )
    }
}

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            text: "i am your father",
            val: ''
        }
    }
    handleChange = (event)=> {
        this.setState({
            text: event.target.value
        });
    }
    changeVal= (val)=> {
        this.setState({val});
    }
    render() {
        return (
            <>
            <input value={this.state.text} onChange={this.handleChange}/>
            <Son fatherText={this.state.text} fatherName={this.props.name} changeFather={this.changeVal}/>
            <p>子传父 ： {this.state.val}</p>
            </>
        )
    }
}
