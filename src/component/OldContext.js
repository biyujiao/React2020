import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <div style={{border: '3px solid green', padding: '10px'}}>
                Header
                <Title></Title>
            </div>
        )
    }
}
class Title extends Component {
    static contextTypes = {
        color: 'String'
    };
    render() {
        return (
            <div style={{border: '3px solid black', padding: '10px', color: this.context.color}}>
                Title
            </div>
        )
    }
}
class Content extends Component {
    render() {
        return (
            <div style={{border: '3px solid blue', padding: '10px'}}>
                Content
            </div>
        )
    }
}
class Main extends Component {
    render() {
        return (
            <div style={{border: '3px solid orange', padding: '10px', marginTop: '10px'}}>
                Main
                <Content></Content>
            </div>
        )
    }
}
export default class Page extends Component {
    
    constructor() {
        super();
        this.state = {color: 'gray'};
    }
    // 定义子上下文对象的属性和类型
    static childContextTypes = {
        color: 'String',
        setColor: 'function'
    };
    // 返回/定义真正的子上下文
    getChildContext() {
        return {
            color: this.state.color,
            setColor: this.setColor
        }
    }
    setColor = (color) => {
        this.setState({color});
    }
    render() {
        return (
            <div style={{border: '3px solid red', padding: '10px'}}>
                Page
                <Header />
                <Main />
            </div>
        )
    }
}