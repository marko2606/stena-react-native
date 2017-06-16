import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

class IconFooter extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}
                onPress={this.props.onPress}
            >
                <Entypo name={this.props.name} size={this.props.size} color={this.props.color} />
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default IconFooter;