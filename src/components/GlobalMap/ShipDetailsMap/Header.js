import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={{color: 'white'}}>
                    Header MENU
                </Text>
            </View>
        )
    }
}

export default Header;