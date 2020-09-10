import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.text = React.createRef();
    }
    getFocus = ()=> {
        console.log(this.text.current.num.current);
        this.text.current.num.current.focus(); // 子组件输入框获取焦点
    }
    render() {
        return (
            <>
            <TextInput ref={this.text}></TextInput>
            <button onClick={this.getFocus}>聚焦</button>
            </>
        )
    }
}
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.num = React.createRef();
    }
    render() {
        return (
            <>
                <input ref={this.num} />
            </>
        );
    }
}
