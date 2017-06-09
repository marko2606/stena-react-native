import React from 'react';
import { View } from 'react-native';

import LogIn from './src/components/LogIn/LogIn';
import AlertNotifications from './src/components/AlertsNotifications/AlertNotifications';

import { styles } from './src/GlobalStyle';

/* TODO router */

export default class App extends React.Component {
    render() {
        const { globalContainer } = styles;
        return (
            <View style={globalContainer}>
                <LogIn/>
            </View>
        );
    }
};

