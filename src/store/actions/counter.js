import * as types from '../action-types';

export default {
    add(amount) {
        return { type: types.ADD, amount };
    },
    minus() {
        return { type: types.MINUS };
    }
}