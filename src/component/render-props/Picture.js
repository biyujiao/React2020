import React, {Component} from 'react';
export default class Picture extends Component {
    render() {
        return (
            <div style={{width:'1000px',height:'1000px'}} className="picture">
                <p>当前鼠标的位置：x: {this.props.x} , y:{this.props.y}</p>
            </div>

        )
    }
}