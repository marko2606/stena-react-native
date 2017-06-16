import { combineReducers } from 'redux';

import alertsReducer from '../components/AlertsNotifications/alerts-reducer';
import loginReducer from '../components/LogIn/LoginReducer';


export default combineReducers({
    alertsReducer,
    loginReducer
});

