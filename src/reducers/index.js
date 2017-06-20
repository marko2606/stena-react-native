import { combineReducers } from 'redux';

import alertsReducer from '../components/AlertsNotifications/alerts-reducer';
import loginReducer from '../components/LogIn/LoginReducer';
import GlobalMapReducer from '../components/GlobalMap/GlobalMapReducer'


export default combineReducers({
    alertsReducer,
    loginReducer
    GlobalMapReducer
});

