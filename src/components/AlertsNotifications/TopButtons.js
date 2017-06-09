import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { colors2 } from '../../Colors';
import { styles } from './AlertsNotificationStyle';

export const TopButtons = ({props}) => {
    const { buttonsStyle, buttonText } = styles;

    let activeButton = props === 'ACTIVE' ? { backgroundColor: colors2['mainGreen']} : null;

    return (
        <TouchableOpacity style={[buttonsStyle, activeButton ]} >
            <Text style={buttonText}>{props}</Text>
        </TouchableOpacity>
    );
};
