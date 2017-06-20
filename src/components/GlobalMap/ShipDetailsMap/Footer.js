import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles'
import IconFooter from './IconFooter'
import { colors } from '../../../Colors'

class Footer extends React.Component {

    render() {
        const white = colors.whiteColor;
        let {footerHeight, displayFooterSelectionDetails} = this.props;
        return (
            <View style={[styles.footer, {height: footerHeight}]}>
                <IconFooter
                    name='list'
                    size={22}
                    color={white}
                    onPress={(event) => console.log(event, event.nativeEvent)}
                    text="OverView"
                    //onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='phone'
                    size={22}
                    color={white}
                    text="Contact"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='suitcase'
                    size={22}
                    color={white}
                    text="Cargo"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='documents'
                    size={22}
                    color={white}
                    text="Bunker info"
                    onPress={() => displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='address'
                    size={22}
                    color={white}
                    text="Itinerary"
                    onPress={() => displayFooterSelectionDetails()}
                />
            </View>
        )
    }
}

export default Footer;