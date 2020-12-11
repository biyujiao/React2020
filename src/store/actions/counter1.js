import * as types from '../action-types';

export default {
    add1(amount) {
        return { type: types.ADD1, amount };
    },
    minus1() {
        return { type: types.MINUS1 };
    }
}