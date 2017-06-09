import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './LogInStyle'

const Footer = () => {
    const {footer, footerSection, footerItemLeft, footerItemRight} = styles;
    return (
        <View style={footer}>
            <View style={footerSection}>
                <Text style={footerItemLeft}>Don't have an account?</Text>
                <Text style={footerItemLeft}>Please contact us.</Text>
            </View>
            <View style={footerSection}>
                <Text style={footerItemRight}>Forgot password?</Text>
                <Text style={footerItemRight}>Please click here.</Text>
            </View>
        </View>
    )
};

export default Footer;