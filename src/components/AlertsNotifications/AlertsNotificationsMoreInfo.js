import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../utils/config.json';
import { colors } from '../../Colors';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class AlertsNotificationsMoreInfo extends Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../assets/fonts/icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }

    render() {
        const { vesselInformationText, iconContainer, iconsText } = this.props.styles;

        if (!this.state.fontLoaded) { return null;}

        return (
            <View>
                <Text style={vesselInformationText}>
                    Vessel status is - {this.props.item.status}.
                </Text>

                <View style={iconContainer}>
                    <Icon
                        name='close'
                        size={25}
                        color={colors['primaryColor1']}
                    />
                    <Text style={iconsText}>DISMISS</Text>

                    <Icon
                        name='my_location'
                        size={25}
                        color={colors['primaryColor1']}
                    />
                    <Text style={iconsText}>LOCATE</Text>

                    <Icon
                        name='equalizer'
                        size={25}
                        color={colors['primaryColor1']}
                    />
                    <Text style={iconsText}>DETAILS</Text>
                </View>
            </View>
        )
    }
}

export default AlertsNotificationsMoreInfo;