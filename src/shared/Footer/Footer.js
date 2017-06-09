import React from 'react';
import { View } from 'react-native';

import { styles } from './footerStyle'

export const Footer = (props) => {
    const { container, footerBorderTop } = styles;

    return (
            <View style={container}>
                <View style={footerBorderTop}/>
                {props.children}
            </View>
    );
};
