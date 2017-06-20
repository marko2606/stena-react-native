import { combineReducers } from 'redux';

import alertsReducer from '../components/AlertsNotifications/alerts-reducer';
import loginReducer from '../components/LogIn/LoginReducer';
import ShipDetailsMapMapReducer from '../components/GlobalMap/ShipDetailsMap/ShipDetailsMapReducer'


export default combineReducers({
    alertsReducer,
    loginReducer,
    ShipDetailsMapMapReducer
});

