import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './CounterStyle';

export const Counter = (props) => {
    const { container, counter } = styles;
    return (
        <View style={container}>
            <Text style={counter}>{props.size}</Text>
        </View>
    )
};

