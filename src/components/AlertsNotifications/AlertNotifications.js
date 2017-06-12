import React from 'react';
import { View, Picker } from 'react-native';

import { Gradient } from '../../shared/';
import { TopButtons } from './TopButtons';
import ListAlertsAndNotifications from './ListAlertsAndNotifications';
import { FooterAlertsNotifications } from './FooterAlertsNotifications'

import { styles } from './style';
import { colors2 } from '../../Colors';

export default class AlertNotifications extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedFilterAlerts: 'initial'
        }
    }

    render() {
        const { container, pickerContainer, pickerStyle, topButtons, linearGradient } = styles;
        return (
            <Gradient
                colors={[colors2['primaryColor2'], colors2['primaryColor']]}
                style={linearGradient}
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
            >
                <View style={container}>

                    <View style={topButtons}>
                        <TopButtons props="ACTIVE"/>
                        <TopButtons props="DISMISS"/>
                    </View>

                    {/* --- Filter bar --- */}
                    <View style={pickerContainer}>
                        <Picker
                            selectedValue={this.state.selectedFilterAlerts}
                            onValueChange={(filter) => this.setState({ selectedFilterAlerts: filter })}
                            style={pickerStyle}
                        >
                            <Picker.Item label="Filter Alerts by group..." value="initial" />
                            <Picker.Item label="ALL VESSELS" value="allVessels" />
                            <Picker.Item label="MY FLEET" value="myFleet" />
                            <Picker.Item label="SUEZMAX" value="suezmax" />
                            <Picker.Item label="STENA BULK" value="stenaBulk" />
                            <Picker.Item label="STENA WECO" value="stenaWeco" />
                            <Picker.Item label="GOLDEN STENA WECO" value="goldenStenaWeco" />
                            <Picker.Item label="STENA LNG" value="stenaLng" />
                        </Picker>
                    </View>

                    <ListAlertsAndNotifications />

                </View>

                <FooterAlertsNotifications />

            </Gradient>
        );
    }
}
