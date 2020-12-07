import React, {Component} from 'react';

export default class MouseTracker extends Component {
    constructor() {
        super();
        this.state={x:0,y:0};
    }
    handleMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div className="abcd" onMouseMove={this.handleMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}