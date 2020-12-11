import * as types from '../action-types';

export default {
    add2(amount) {
        return { type: types.ADD2, amount };
    },
    minus2() {
        return { type: types.MINUS2 };
    }
}