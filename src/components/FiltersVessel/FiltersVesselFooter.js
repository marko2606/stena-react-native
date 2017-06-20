import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Footer } from '../../shared/';

import { styles } from './FiltersVesselStyle';

class FooterFiltersShip extends Component {

    render() {
        const { footerIconContainer, footerIconWrapper, footerIconTitle, footerIconTitleWarning } = styles;
        const iconSize = 20;

        return (
            <Footer>
                <View style={footerIconContainer}>
                    <View style={footerIconWrapper}>
                        <Ionicons name="ios-list" size={iconSize} style={styles.footerIcon} />
                        <Text style={footerIconTitle}>Vessels</Text>
                    </View>

                    <View style={footerIconWrapper}>
                        <Ionicons name="ios-funnel" size={iconSize} style={styles.footerIconWarning} />
                        <Text style={{...footerIconTitle, ...footerIconTitleWarning}}>Filter</Text>
                    </View>

                    <View style={footerIconWrapper}>
                        <Ionicons name="ios-stats" size={iconSize} style={styles.footerIcon} />
                        <Text style={footerIconTitle}>Market</Text>
                    </View>

                    <View style={footerIconWrapper}>
                        <Ionicons name="ios-cloud" size={iconSize} style={styles.footerIcon} />
                        <Text style={footerIconTitle}>Weather</Text>
                    </View>
                </View>
            </Footer>
        )
    }
}

export default FooterFiltersShip;