import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={{color: 'white'}}>
                    Global Map
                </Text>
            </View>
        )
    }
}

export default Header;