import React from 'react';
import { View } from 'react-native';

import { Gradient } from '../../shared/';
import { TopButtons } from './TopButtons';
import ListAlertsAndNotifications from './ListAlertsAndNotifications';
import FooterAlertsNotifications from './FooterAlertsNotifications'
import AlertsNotificationsPicker from './AlertsNotificationsPicker';

import { colors } from '../../Colors';
import { styles } from './AlertsNotificationStyle';

export default class AlertNotifications extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedFilterAlerts: 'initial'
        }
    }

    render() {
        const { container, topButtons, linearGradient } = styles;
        return (
            <Gradient
                colors={[colors['gradientPrimaryColor1'], colors['gradientPrimaryColor2'], colors['gradientPrimaryColor3']]}
                style={linearGradient}
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
            >
                <View style={container}>
                    <View style={topButtons}>
                        <TopButtons props="ACTIVE"/>
                        <TopButtons props="DISMISSED"/>
                    </View>

                    <AlertsNotificationsPicker
                            style={styles}
                    />
                    <ListAlertsAndNotifications />
                </View>
                <FooterAlertsNotifications />
            </Gradient>
        );
    }
}
