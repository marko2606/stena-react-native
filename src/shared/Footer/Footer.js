import React from 'react';
import { View } from 'react-native';

import { styles } from './FooterStyle'

import { Gradient } from '../index';
import { colors } from '../../Colors';

export const Footer = (props) => {
    const { container, footerBorderTopGradient } = styles;

    return (
            <View style={container}>
                <Gradient
                    colors={[colors['primaryColor2'], colors['primaryColor1']]}
                    style={footerBorderTopGradient}
                    start={{x: 1.0, y: 0.0}}
                    end={{x: 0.5, y: 0}}
                />
                {props.children}
            </View>
    );
};
