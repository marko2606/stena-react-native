import React from 'react';
import { View, Dimensions } from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;

export const Footer = (props) => {
    return (
            <View
                style={{
                    position: 'absolute',
                    flex: 1,
                    backgroundColor: 'rgb(11, 41, 53)',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: HEIGHT_DEVICE - 65
                }}
            >
                {props.children}
            </View>
    );
};