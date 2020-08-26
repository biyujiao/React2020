import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 1};
    }
    add() {
        this.setState({num: this.state.num + 1});
        console.log(this.state.num, 111);
        this.setState({num: this.state.num + 1});
        console.log(this.state.num, 222);
        setTimeout(() => {
            this.setState({num: this.state.num + 1});
            console.log(this.state.num, 333);
            this.setState({num: this.state.num + 1});
            console.log(this.state.num, 444);
        }, 1000);
    }
    render() {
        return (
            <>
            <button onClick={this.add.bind(this)}>按钮</button>
            </>
        )
    }
}