import {
    GET_DATA_SUCCESS, GET_DATA_ERROR
} from '../../actions/types';

const INITIAL_STATE = {
    dataStena: [],
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                dataStena: action.payload
            });
            break;
        case GET_DATA_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
            break;
        default:
            return state;
    }
};