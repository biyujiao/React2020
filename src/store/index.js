import { createStore } from '../redux';
import combineReducer from './reducers';
let store = createStore(combineReducer);
export default store;

/**
 * 在redux 中我们只能有一个仓库、智能有一个reducer,仓库里只能有一个state
 * 希望可以写多个reducer,管理多个state，他们可以合并成一个reducer和一个大的state
 */