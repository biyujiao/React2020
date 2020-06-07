function ReactElement(type, props) {
    const element = {type, props};
    return element;
}

function createElement(type, config={}, children) {
    let propName;
    const config = {};
    for(propName in config) {
        props[propName] = config[propName];
    }
    const childrenLength = arguments.length - 2;
    if(props.childrenLength === 1) {
        props.children  = children;
    } else if (childrenLength  > 1) {
        props.children = Array.from(arguments).slice(2);
    }

    return ReactElement(type, props);
}

export default (createElement);