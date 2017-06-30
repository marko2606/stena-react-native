import React, {Component} from 'react';
import {Platform, NativeModules} from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';

import CustomNavBar from './shared/CustomNavBar/CustomNavBar';

import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard'
import AlertsNotification from './components/AlertsNotifications/AlertNotifications';
import GlobalMap from './components/GlobalMap/GlobalMap'
import VesselDetailsMap from './components/GlobalMap/VesselDetailsMap/VesselDetailsMap'
import { FiltersVessel } from './components/GlobalMap/FiltersVessel/FiltersVessel';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class RouterComponent extends Component {
    render() {
        // NOTE: type={ActionConst.REPLACE} needs to be added in order for maps to render properly.
        const {RESET, REPLACE} = ActionConst;
        return (
            <Router>
                <Scene
                    key="alerts"
                    sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                    component={AlertsNotification}
                    navBar={CustomNavBar}
                    icons={true}
                    leftIcon="dashboard"
                    rightIcon="search"
                    title="ALERTS & NOTIFICATIONS"
                    type={REPLACE}
                />
            </Router>
        );
    }
}

export default RouterComponent;