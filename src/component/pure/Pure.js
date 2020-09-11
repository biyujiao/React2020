import React, {Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';


class Title1 extends PureComponent {
    render() {
        console.log('title render');
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

// 函数组件
function PureTitle(props){
    return <div>{props.title}</div>
}
Title = React.memo(PureTitle);
class Counter extends PureComponent {
    render() {
        console.log('counter render');
        return (
            <div>{this.props.number}</div>
        )
    }
}
export default class App extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            title: '计数器',
            number: 0
        };
        this.inputRef = React.createRef();
    }
    add = () => {
        this.setState({ number: this.state.number + parseInt(this.inputRef.current.value)});
    }
    render() {
        return (
            <div>
               <Title title={this.state.title} />
               <Counter number={this.state.number} />
               <input ref={this.inputRef}/>
               <button  onClick={this.add} >+</button>
            </div>
        );
    }
}