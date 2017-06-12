import React from 'react';
import { View } from 'react-native';

import { styles } from './footerStyle'

import { Gradient } from '../index';
import { colors2 } from '../../Colors';

export const Footer = (props) => {
    const { container, footerBorderTopGradient } = styles;

    return (
            <View style={container}>
                <Gradient
                    colors={[colors2['primaryColor'], colors2['mainGreen']]}
                    style={footerBorderTopGradient}
                    start={{x: 1.0, y: 0.0}}
                    end={{x: 0.5, y: 0}}
                />
                {props.children}
            </View>
    );
};
