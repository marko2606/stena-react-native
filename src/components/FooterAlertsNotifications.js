import React from 'react';
import { View, Dimensions, Text } from 'react-native';

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
                    top: '90%',
                    borderTopWidth: 1,
                    borderTopColor: 'rgb(32, 177, 151)'
                }}
            >
                {props.children}
            </View>
    );
};