import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';

export const TopButtons = () => {
    const { topButtons, buttonsStyle, buttonText } = styles;

    return (
        <View style={topButtons}>
            <TouchableOpacity style={[buttonsStyle, { backgroundColor: 'rgb(32, 177, 151)'} ]}>
                <Text style={styles.buttonText}>ACTIVE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={buttonsStyle} >
                <Text style={buttonText}>DISMISSED</Text>
            </TouchableOpacity>
        </View>
    );
};
