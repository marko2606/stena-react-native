import { combineReducers } from 'redux';

import alertsReducer from '../components/AlertsNotifications/alerts-reducer';
import loginReducer from '../components/LogIn/LoginReducer';
import VesselDetailsMapReducer from '../components/GlobalMap/VesselDetailsMap/VesselDetailsMapReducer'


export default combineReducers({
    alertsReducer,
    loginReducer,
    VesselDetailsMapReducer
});

