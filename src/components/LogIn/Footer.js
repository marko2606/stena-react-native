import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './LogInStyle'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerSection}>
                <Text style={styles.footerItemLeft}>Don't have an account?</Text>
                <Text style={styles.footerItemLeft}>Please contact us.</Text>
            </View>
            <View style={styles.footerSection}>
                <Text style={styles.footerItemRight}>Forgot password?</Text>
                <Text style={styles.footerItemRight}>Please click here.</Text>
            </View>
        </View>
    )
};

export default Footer;