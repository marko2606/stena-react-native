import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import { LOGIN_ACTION_TYPES } from '../../actions/types';
import LoginService from '../../services/LoginService';
import LocalStorageService from '../../services/LocalStorage';

export default function* watchLoginUser() {
    yield takeEvery(LOGIN_ACTION_TYPES.TRY_LOGIN, tryUserLogin);
}

export function* tryUserLogin(action) {
    let response;
    try {
        response = yield LoginService.loginUser(action.user);
    } catch (error) {
        const errorMessage = 'CREDENTIALS_ERROR';
        yield put({ type: LOGIN_ACTION_TYPES.SET_ERROR, error: errorMessage });
    }
    if (response) {
        const { data } = response;
        LocalStorageService.setTokens(data.access_token, data.refresh_token);
        Actions.main();
        yield put({ type: LOGIN_ACTION_TYPES.SET_ERROR, error: '' });
    }
}