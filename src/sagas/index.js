import alertsSaga from '../components/AlertsNotifications/alerts-saga';

export default function* rootSaga() {
    yield [
        alertsSaga()
    ]
}