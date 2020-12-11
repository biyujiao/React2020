import React from 'react';
import store from '../store';
import { bindActionCreators } from '../redux';
import actions from '../store/actions/counter2';

// bindActionCreators: 把actionCreator和store.dispatch方法绑定在一起,可以绑定多个
let boundActions = bindActionCreators(actions, store.dispatch);
// boundActions={add, minus}

export default class Counter extends React.Component {
    state = {value: store.getState().counter2.number};
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({value:store.getState().number});
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <>
                <p>{this.state.value}</p>
                <button onClick={() => boundActions.add2(5)}>加</button>
                <button onClick={boundActions.minus2}>减</button>
            </>
        )
    }
}