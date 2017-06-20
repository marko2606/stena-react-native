import React from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { styles } from './GlobalMapStyles'
import IconFooter from './ShipDetailsMap/IconFooter'
import { colors } from '../../Colors'

class Footer extends React.Component {
    render() {
        let white = colors.whiteColor;
        return (
            <View style={styles.footer}>
                <IconFooter
                    name='list'
                    size={22}
                    color={white}
                    text="Vessels"
                />
                <IconFooter
                    onPress={() => Actions.filters()}
                    name='funnel'
                    size={22}
                    color={white}
                    text="Filter"
                />
                <IconFooter
                    name='globe'
                    size={22}
                    color={white}
                    text="Market"
                />
                <IconFooter
                    name='cloud'
                    size={22}
                    color={white}
                    text="Weather"
                />
            </View>
        )
    }
}

export default Footer;