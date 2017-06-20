import {
    VESSEL_ACTION_TYPES
} from '../../actions/types';

const INITIAL_STATE = {
    dataStena: [],
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VESSEL_ACTION_TYPES.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                dataStena: action.payload
            });
            break;
        case VESSEL_ACTION_TYPES.GET_DATA_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
            break;
        default:
            return state;
    }
};