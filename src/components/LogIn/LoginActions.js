import {LOGIN_ACTION_TYPES} from '../../actions/types';

export function tryLoginAction(dispatch, user) {
    dispatch({
        type: LOGIN_ACTION_TYPES.TRY_LOGIN,
        user
    });
}