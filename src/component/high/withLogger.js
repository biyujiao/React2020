import React, { Component } from 'react';

export default function(Comp) {
    return class extends Component {
        componentWillMount() {
            this.start = Date.now();
        }
        componentDidMount() {
            console.log(Date.now() - this.start + 'ms');
        }
        render() {
            return <Comp {...this.props} />
        }
    }
}