import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements'

import { Footer } from '../../components/Footer';

export const FooterAlertsNotifications = () => {
    return (
        <Footer>

            <View style={styles.container}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='warning'
                        color='rgb(156, 57, 53)'
                        iconStyle={{ marginTop: 6, marginRight: '35%' }}
                    />

                    <Icon
                        name='notifications-active'
                        color='white'
                        iconStyle={{ marginTop: 6, marginLeft: '35%' }}
                    />
                </View>
            </View>

        </Footer>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});