import watchGetData from '../components/AlertsNotifications/alerts-saga';

export default function* rootSaga() {
    yield [
        watchGetData()
    ]
}