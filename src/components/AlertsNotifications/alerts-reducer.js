import {
    SHIP_GET_DATA
} from '../../actions/types';

const INITIAL_STATE = {
    dataStena: [],
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHIP_GET_DATA.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                dataStena: action.payload
            });
            break;
        case SHIP_GET_DATA.GET_DATA_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
            break;
        default:
            return state;
    }
};