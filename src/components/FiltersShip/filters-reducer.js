import {
    FILTER_GROUPS
} from '../../actions/types';

const INITIAL_STATE = {
    activeFilterGroup: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILTER_GROUPS:
            return Object.assign({}, state, {
                activeFilterGroup: action.payload
            });
            break;
        default:
            return state;
    }
};