import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Font} from 'expo';
import {createIconSetFromIcoMoon} from '@expo/vector-icons';
import icoMoonConfig from '../../utils/config.json';

import {Footer} from '../../shared/';

import {colors2} from '../../Colors';
import {styles} from './AlertsNotificationStyle';

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
        const {footerContainer, footerIconContainer, footerIconWrapper, footerIconTitle, footerIconTitleWarning} = styles;

        if (!this.state.fontLoaded) {
            return null;
        }

        return (
            <Footer>
                <View style={footerContainer}>
                    <View style={footerIconContainer}>
                        <View style={footerIconWrapper}>
                            <Icon name='warning' size={20} style={styles.footerIconWarning}/>
                            <Text style={{...footerIconTitle, ...footerIconTitleWarning}}>Alerts</Text>
                        </View>

                        <View style={footerIconWrapper}>
                            <Icon name='notifications_active' size={20} style={styles.footerIcon}/>
                            <Text style={footerIconTitle}>Notification</Text>
                        </View>
                    </View>
                </View>
            </Footer>
        )
    }
}

export default FooterAlertsNotifications;