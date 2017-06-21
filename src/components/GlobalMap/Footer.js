import React from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { styles } from './GlobalMapStyles'
import IconFooter from './VesselDetailsMap/IconFooter'
import { colors } from '../../Colors'

class Footer extends React.Component {
    render() {
        let {whiteColor} = colors;
        return (
            <View style={styles.footer}>
                <IconFooter
                    name='list'
                    size={22}
                    color={whiteColor}
                    text="Vessels"
                />
                <IconFooter
                    onPress={() => Actions.filters()}
                    name='funnel'
                    size={22}
                    color={whiteColor}
                    text="Filter"
                />
                <IconFooter
                    name='globe'
                    size={22}
                    color={whiteColor}
                    text="Market"
                />
                <IconFooter
                    name='cloud'
                    size={22}
                    color={whiteColor}
                    text="Weather"
                />
            </View>
        )
    }
}

export default Footer;