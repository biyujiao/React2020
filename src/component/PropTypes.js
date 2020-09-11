import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class PropType extends Component {
    static defaultProps = {
        isMarried: false
    };
    static propType = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.oneOf(['man','woman']),
        isMarried: PropTypes.bool.isRequired,
        hobby:  PropTypes.arrayOf(PropTypes.string),
        position:  PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        age(props,propsName,componentName) {
            if (props[propsName]<10) {
                return new Error(`Invalid Prop ${propName} suplied to &{componentName}`);
            }
        }
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}