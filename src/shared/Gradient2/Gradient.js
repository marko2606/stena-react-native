import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import {colors2} from '../../Colors';
import { styles } from './gradientStyle'

export const Gradient = (props) => {
    const { container, box, linearGradient } = styles;
    return (
        <View style={container}>
            <View style={box} />
            <LinearGradient
                colors={[colors2['primaryColor2'], 'transparent']}
                style={linearGradient}
            >
                {props.children}
            </LinearGradient>
        </View>
    );
};