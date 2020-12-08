export default function createStore(reducer, preloadedState) {
    let currentState = preloadedState; // 仓库中的状态
    let currentListeners = [];
  
    function getState() {
      return currentState;
    }
  
    function subscribe(listener) {
      currentListeners.push(listener);
      // 返回一个取消订阅
      return function unsubscribe() {
        const index = currentListeners.indexOf(listener);
        currentListeners.splice(index, 1);// 把此监听函数删除掉
      };
    }
  
    function dispatch(action) {
      if (Object.getPrototypeOf(action) !== Object.prototype) {
        throw new Error(`动作必须是一个纯对象，如果想进行异步操作请使用中间件`);
      }
      if (typeof action.type === "undefined") {
        throw new Error(`动作不能一个值为undefined的type属性`);
      }
  
      currentState = reducer(currentState, action);
      for (let i = 0; i < currentListeners.length; i++) {
        const listener = currentListeners[i];
        listener();
      }
  
      return action;
    }
    //初始化默认值
    dispatch({ type:'@@redux/INIT' });
    return {
      dispatch,
      subscribe,
      getState
    };
  }