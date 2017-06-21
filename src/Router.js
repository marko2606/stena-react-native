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
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LogIn}
                        initial
                        hideNavBar
                    />
                </Scene>

                <Scene key="main"
                       style={{paddingTop: STATUSBAR_HEIGHT}}
                       type={RESET}
                >
                    <Scene
                        key="dashboard"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        component={Dashboard}
                        title="OPERATIONAL PLATFORM DASHBOARD"
                        navBar={CustomNavBar}
                        initial
                        type={REPLACE}
                    />
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
                    <Scene
                        key="globalMap"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        navBar={CustomNavBar}
                        component={GlobalMap}
                        icons={true}
                        leftIcon="dashboard"
                        rightIcon="search"
                        title="Global Map"
                        type={REPLACE}
                    />
                    <Scene
                        key="shipDetailsMap"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        navBar={CustomNavBar}
                        component={VesselDetailsMap}
                        icons={true}
                        rightIcon="search"
                        leftIcon="back"
                        title="Vessel Details Map"
                        type={REPLACE}
                    />
                    <Scene
                        key="filters"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        component={FiltersVessel}
                        navBar={CustomNavBar}
                        icons={true}
                        leftIcon="back-button"
                        rightIcon="search"
                        rightIconAlert="notifications_active"
                        title="FILTERS"
                    />
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;