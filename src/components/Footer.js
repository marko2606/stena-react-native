import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;

export const Footer = (props) => {
    return (
            <View style={styles.container}>
                <View style={styles.footerBorderTop} />
                {props.children}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        backgroundColor: 'rgb(11, 41, 53)',
        left: 0,
        right: 0,
        bottom: 0,
        top: HEIGHT_DEVICE - 65,
        alignItems: 'center'
    },
    footerBorderTop: {
        borderTopWidth: 2,
        borderTopColor: 'rgb(32, 177, 151)',
        width: '85%'
    }
});