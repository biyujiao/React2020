import React, {Component} from 'react';
export default class LifeCircle extends Component {
    static defaultProps = {
        val: '默认属性'
    }
    constructor(props) {
        super(props);// this.props = props;
        this.state = {num: 0};//初始化状态
        console.log('1-初始化状态和属性');
    }
    
    componentWillMount() {
        console.log('2-组件将要挂载');
    }
    componentDidMount() {
        console.log('4-挂载完成');
    }
    shouldComponentUpdate() {
        console.log('5-询问是否更新-shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('6-组件将要更新 willupdate');
    }
    componentDidUpdate() {
        console.log('7-组件更新完成 didupdate');
    }


    add = () => {
        this.setState({num: this.state.num + 1});
    }
    render() {
        console.log('3-渲染，即挂载');
        return (
            <div>
                <p style={{color: 'red'}}>接收父组件的属性：{this.props.name}, 默认属性：{this.props.val}</p>
                <p>LifeCircle: {this.state.num}</p>
                <button onClick={this.add}> + </button>
                {this.state.num%2 === 0 && <Counter number={this.state.num}/>}
            </div>
        )
    }
}
class Counter extends Component  {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.number % 3 === 0) {
            return true;
        } else {
            return false;
        }
    }
    componentWillReceiveProps() {
        console.log('couter:是否接收props');
    }
    componentWillUnmount() {
        console.log('couter:组件卸载');
    }
    render() {
        console.log('counter: 渲染，挂载完成');
        return (
            <>
                <p>counter:{this.props.number}</p>
            </>
        )
    }
}