import React from 'react';
import { View, Platform, NativeModules } from 'react-native';

import AlertNotifications from './src/components/AlertsNotifications/AlertNotifications';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT }}>
                <AlertNotifications />
            </View>
        );
    }
}