import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './VesselDetailsMapStyles'
import IconFooter from './IconFooter'
import { colors } from '../../../Colors'

class Footer extends React.Component {

    render() {
        const {whiteColor} = colors;
        let {footerHeight, displayFooterSelectionDetails} = this.props;
        return (
            <View style={[styles.footer, {height: footerHeight}]}>
                <IconFooter
                    name='list'
                    size={22}
                    color={whiteColor}
                    text="OverView"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='phone'
                    size={22}
                    color={whiteColor}
                    text="Contact"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='suitcase'
                    size={22}
                    color={whiteColor}
                    text="Cargo"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='documents'
                    size={22}
                    color={whiteColor}
                    text="Bunker info"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='address'
                    size={22}
                    color={whiteColor}
                    text="Itinerary"
                    onPress={() => displayFooterSelectionDetails()}
                />
            </View>
        )
    }
}

export default Footer;