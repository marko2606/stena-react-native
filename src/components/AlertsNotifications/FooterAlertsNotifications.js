import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

import { Footer } from '../../shared/';

import {colors2} from '../../Colors';
import { styles } from './style';


export const FooterAlertsNotifications = () => {
    const { footerContainer, footerIconContainer } = styles;
    return (
        <Footer>

            <View style={footerContainer}>

                <View style={footerIconContainer}>
                    <Icon
                        name='warning'
                        color={colors2['redWarning']}
                        iconStyle={{ marginTop: 6, marginRight: '35%' }}
                    />

                    <Icon
                        name='notifications-active'
                        color={colors2['white']}
                        iconStyle={{ marginTop: 6, marginLeft: '35%' }}
                    />
                </View>
            </View>

        </Footer>
    );
};
