import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { SHIP_GET_DATA } from '../../actions/types';
import DataService from '../../services/alerts-services';

export default function* watchGetData() {
    yield takeEvery(SHIP_GET_DATA.GET_DATA, getDataAsync);
}

export function* getDataAsync() {
    try {
        const response = yield DataService.getAllData();
        const dataStena = response.data;
        yield put({ type: SHIP_GET_DATA.GET_DATA_SUCCESS, payload: dataStena });
    } catch (e) {
        yield put({ type: SHIP_GET_DATA.GET_DATA_ERROR, errorMessage: e.message });
    }
}