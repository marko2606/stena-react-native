import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './CounterStyle';

export const Counter = (props) => {
    const { container } = styles;
    return (
        <View style={[container, { left: props.positionLeft }]}>
            <Text style={{ fontSize: props.fontSize }}>{props.size}</Text>
        </View>
    )
};

