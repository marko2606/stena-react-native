import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import DataService from '../../services/alerts-services';

export default function* watchGetData() {
    yield takeEvery('GET_DATA', getDataAsync);
}

export function* getDataAsync() {
    try {
        const response = yield DataService.getAllData();
        const dataStena = response.data;
        yield put({ type: 'GET_DATA_SUCCESS', payload: dataStena });
    } catch (e) {
        yield put({ type: 'GET_DATA_ERROR', errorMessage: e.message });
    }
}