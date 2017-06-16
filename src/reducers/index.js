import { combineReducers } from 'redux';

import alertsReducer from '../components/AlertsNotifications/alerts-reducer';
import filtersGroupReducer from '../components/FiltersShip/filters-reducer';

export default combineReducers({
    alertsReducer,
    filtersGroupReducer
});

