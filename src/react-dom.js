function render(ele, parentNode) {
    if(typeof ele ==  'string') {
        return parentNode.appendChild(document.createTextNode(ele));
    }
}
export default (render);