import React from 'react';
import { View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Gradient = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'rgb(13, 40, 50)', flex: 1 }} />
            <LinearGradient
                colors={['rgba(27,84,106,0.8)', 'transparent']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: SCREEN_HEIGHT
                }}
            >
                {props.children}
            </LinearGradient>
        </View>
    );
};