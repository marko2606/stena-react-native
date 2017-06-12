import React, { Component } from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../utils/config.json';

import { Footer } from '../../shared/';

import {colors2} from '../../Colors';
import { styles } from './AlertsNotificationStyle';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class FooterAlertsNotifications extends Component {
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
        const {footerContainer, footerIconContainer} = styles;

        if (!this.state.fontLoaded) { return null;}

        return (
            <Footer>
                <View style={footerContainer}>
                    <View style={footerIconContainer}>
                         <Icon name='warning' size={45} />
                         <Icon name='notifications_active' size={45}/>
                    </View>
                </View>
            </Footer>
        )
    }
}

export default FooterAlertsNotifications;