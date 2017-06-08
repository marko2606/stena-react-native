import React from 'react';
import { View} from 'react-native';

import AlertNotifications from './src/components/AlertsNotifications/AlertNotifications';

import { styles } from './src/GlobalStyle';

export default class App extends React.Component {

render() {
    const { globalContainer } = styles;

        return (
            <View style={globalContainer}>
                <AlertNotifications />
            </View>
        );
    }
}