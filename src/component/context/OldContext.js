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
    render() {
        return (
            <div style={{border: '3px solid black', padding: '10px'}}>
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
                <Content />
            </div>
        )
    }
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
        return (
            <div style={{border: '3px solid red', padding: '10px'}}>
                Page
                <Header />
                <Main />
            </div>
        )
    }
}