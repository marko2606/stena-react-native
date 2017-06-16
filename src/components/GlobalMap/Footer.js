import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import IconFooter from './ShipDetailsMap/IconFooter'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <IconFooter
                    name='list'
                    size={22}
                    color="white"
                    text="Vessels"
                />
                <IconFooter
                    name='funnel'
                    size={22}
                    color="white"
                    text="Filter"
                />
                <IconFooter
                    name='globe'
                    size={22}
                    color="white"
                    text="Market"
                />
                <IconFooter
                    name='cloud'
                    size={22}
                    color="white"
                    text="Weather"
                />
            </View>
        )
    }
}

export default Header;