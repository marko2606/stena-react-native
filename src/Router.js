import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';

import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard'
import AlertsNotification from './components/AlertsNotifications/AlertNotifications';

class RouterComponent extends Component {
    render() {
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
                       type={ActionConst.RESET}>
                    <Scene
                        key="dashboard"
                        sceneStyle={{paddingTop: Platform.OS === 'android' ? 44 : 64}}
                        tabs={true} tabBarStyle={style.tabBarStyle}
                        component={Dashboard}
                        title="OPERATIONAL PLATFORM DASHBOARD"
                        initial
                    />
                    <Scene
                        key="alerts"
                        sceneStyle={{paddingTop: Platform.OS === 'android' ? 44 : 64}}
                        component={AlertsNotification}
                        title="ALERTS & NOTIFICATION"
                    />
                </Scene>
            </Router>
        );
    }
}

let style = StyleSheet.create({
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: 'black',
        opacity        : 1
    }
});

export default RouterComponent;