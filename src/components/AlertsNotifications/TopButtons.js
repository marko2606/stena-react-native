import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { colors } from '../../Colors';
import { styles } from './AlertsNotificationStyle';

export const TopButtons = ({props}) => {
    const { buttonsStyle, buttonText } = styles;

    let activeButton = props === 'ACTIVE' ? { backgroundColor: colors['primaryColor1']} : null;

    return (
        <TouchableOpacity style={[buttonsStyle, activeButton ]} >
            <Text style={buttonText}>{props}</Text>
        </TouchableOpacity>
    );
};
