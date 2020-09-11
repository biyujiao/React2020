import React, {Component} from 'react';
import PropTypes from 'prop-types';
const ThemeContext = React.createContext();
// ThemeContext = {Provider, Consumer}

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
class Title1 extends Component {
    static contextType = ThemeContext;

    render() {
        return (
            <div style={{border: '3px solid black', padding: '10px', color: this.context.color}}>
                Title
            </div>
        )
    }
}
// 函数组件
function Title(props) {
    return (
        <ThemeContext.Consumer>
            {
                // value = ctx
                value => (
                    <div style={{border: '3px solid black', padding: '10px', color: value.color}}>
                        TitleTitleTitleTitle
                    </div>
                )
            }
        </ThemeContext.Consumer>
    ) 
}
class Main extends Component {
    render() {
        return (
            <div style={{border: '3px solid orange', padding: '10px', marginTop: '10px'}}>
                Main
                <Content />
            </div>
        )
    }
}

class Content1 extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div style={{border: '3px solid blue', padding: '10px', color: this.context.color}}>
                Content
                <button onClick={() => this.context.setColor('red')}>点击</button>
                <button onClick={() => this.context.setColor('blue')}>点击</button>
            </div>
        )
    }
}
// 函数组件
function Content(props) {
    return (
        <ThemeContext.Consumer>
            {
                value => (
                    <div style={{border: '3px solid blue', padding: '10px', color: value.color}}>
                        Content
                        <button onClick={() => value.setColor('red')}>点击</button>
                        <button onClick={() => value.setColor('blue')}>点击</button>
                    </div>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default class Page extends Component {
    constructor() {
        super();
        this.state = {color: 'yellow'};
    }
    setColor = (color) => {
        this.setState({color});
    }
    render() {
        let ctx={color: this.state.color, setColor: this.setColor};

        return (
            <ThemeContext.Provider value={ctx}>
                <div style={{border: '3px solid red', padding: '10px'}}>
                    Page
                    <Header />
                    <Main />
                </div>
            </ThemeContext.Provider>
        )
    }
}