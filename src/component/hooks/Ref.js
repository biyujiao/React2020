import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';

function Child(props, parentRef) {
    let inputRef = useRef();
    // 在使用ref时自定义暴露给父组件的实例值
    useImperativeHandle(parentRef, ()=>{
        return {
            focus() {
                inputRef.current.focus();
            },
            changeText(text) {
                inputRef.current.value = text;
            }
        }
    });
    return (
        <div>
            child: <input type="text" ref={inputRef}/>
        </div>
    );
}
Child = forwardRef(Child);
function Parent() {
    let [number, setNumber] = useState(0);
    const parentRef = useRef();
    function getFocus() {
        parentRef.current.changeText('foucs');
        parentRef.current.focus();
    }
    return (
        <>
            <Child ref={parentRef} />
            parent: 
            <div>
                <button onClick={getFocus}>获得焦点</button>
                <button onClick={ ()=>setNumber(number+1) }>+</button>
            </div>
        </>
    );
}
export default Parent;