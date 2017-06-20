import { LOGIN_ACTION_TYPES } from '../../actions/types';

const initialState = {
    error: ''
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.SET_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}