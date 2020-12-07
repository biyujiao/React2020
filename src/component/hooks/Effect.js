import React, { useEffect, useState, useLayoutEffect } from "react";

function Counter() {
    let [number, setNumber] = useState(0);
    // 在每次渲染完成之后执行，相当于componentDidMount ,componentDidUpdate
    useEffect(() => {
        document.title = `你一共点击了${number}次哦`;
        console.log('开启新定时器');
        const timer = setInterval(() => {
            setNumber(number => number + 1)
        }, 1000);
    }, []); // 数组表示effect依赖的变量，只有当这个变量发生改变之后才会重新执行effect函数
    return (
        <>
            <p> 次数： {number}</p>
            <button onClick={() => setNumber(number+1)} >+</button>    
        </>
    );
}
function Effect() {
    let [visible, setVisible] = useState(true);
    return (
        <div>
            {visible && <Counter />}
            <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
        </div>
    );
}
function UseLayoutEffect() {
    const [color, setColor] = useState('red');
    useLayoutEffect(() => {
        alert(color);// color改变了但是页面中颜色没有改变
    });
    useEffect(() => {
        console.log('useEffect', color);
    });
    return (
        <>
            <div id="box" style={{color: color}}>这是一种颜色</div>
            <button onClick={() => setColor('blue')}>蓝色</button>
            <button onClick={() => setColor('green')}>绿色</button>
            <button onClick={() => setColor('yellow')}>黄色</button>
        </>
    );
}
// export default Effect;
export default UseLayoutEffect;