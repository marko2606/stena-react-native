import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './VesselDetailsMapStyles'

class IconFooter extends React.Component {
    render() {
        const {onPress, name, size, color, text} = this.props;
        return (
            <TouchableOpacity
                style={styles.icon}
                onPress={onPress}
            >
                <Entypo name={name} size={size} color={color} />
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }
}

export default IconFooter;