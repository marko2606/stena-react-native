import alertsSaga from '../components/AlertsNotifications/alerts-saga';
import loginSaga from '../components/LogIn/LoginSaga';

export default function* rootSaga() {
    yield [
        alertsSaga(),
        loginSaga()
    ]
}