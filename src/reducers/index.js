import { combineReducers } from 'redux';

import alertsReducer from '../components/AlertsNotifications/alerts-reducer';
import GlobalMapReducer from '../components/GlobalMap/GlobalMapReducer'

export default combineReducers({
    alertsReducer,
    GlobalMapReducer
});

