import React, {Component} from 'react';
import {Platform, NativeModules} from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';

import CustomNavBar from './shared/CustomNavBar/CustomNavBar';

import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard'
import AlertsNotification from './components/AlertsNotifications/AlertNotifications';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class RouterComponent extends Component {
    render() {
        return (
            <Router>
{/*                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LogIn}
                        //initial
                        hideNavBar
                    />
                </Scene>*/}
                <Scene key="main"
                       style={{paddingTop: STATUSBAR_HEIGHT}}
                       type={ActionConst.RESET}>
                    <Scene
                        key="dashboard"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        component={Dashboard}
                        title="OPERATIONAL PLATFORM DASHBOARD"
                        navBar={CustomNavBar}
                        //initial
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
                        initial
                    />
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;