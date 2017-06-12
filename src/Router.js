import React, {Component} from 'react';
import {Platform, NativeModules} from 'react-native';
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';

import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard'
import AlertsNotification from './components/AlertsNotifications/AlertNotifications';

import {colors} from './Colors';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

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
                       style={{paddingTop: STATUSBAR_HEIGHT}}
                       type={ActionConst.RESET}>
                    <Scene
                        key="dashboard"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        component={Dashboard}
                        navigationBarStyle={styles.navigationBar}
                        titleStyle={styles.navigationBarTitle}
                        title="DASHBOARD"
                        hideBackImage={true}
                        initial
                    />
                    <Scene
                        key="alerts"
                        sceneStyle={{paddingTop: STATUSBAR_HEIGHT}}
                        component={AlertsNotification}
                        navigationBarStyle={styles.navigationBar}
                        titleStyle={styles.navigationBarTitle}
                        backButtonImage={require('./assets/images/dashboard.png')}
                        backButtonIconStyle={{ width: 20, height: 20 }}
                        onBack={() => {  Actions.dashboard() }}
                        onRight={() => {
                            console.log('this is on right evt');
                        }}
                        rightButtonImage={require('./assets/images/search.png')}
                        rightButtonIconStyle={{ width: 20, height: 20 }}
                        title="ALERTS & NOTIFICATIONS"
                    />
                </Scene>
            </Router>
        );
    }
}

const styles = {
    navigationBar: {
        backgroundColor: colors['gradientPrimaryColor2']
    },
    navigationBarTitle: {
        color: colors['whiteColor'],
        fontWeight: 'normal'
    }
};

export default RouterComponent;