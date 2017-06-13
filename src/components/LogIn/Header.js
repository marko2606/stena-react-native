import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../utils/config.json';
import { styles } from './LogInStyle';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class Header extends Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../assets/fonts/icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }
    render() {
        const { headerContainer, h1Container, h1, loginIcon, welcomeText, SOPText} = styles;

        if (!this.state.fontLoaded) { return null;}

        return (
            <View style={headerContainer}>
                <Icon name="flag" size={45} style={loginIcon}/>
                <View style={h1Container}>
                    <Text style={h1}>Stena Bulk</Text>
                </View>
                <Text style={welcomeText}>WELCOME TO</Text>
                <Text style={[{fontSize: this.props.SOPFontSize}, SOPText]}>
                    STENA OPERATIONAL PLATFORM
                </Text>
            </View>
        )
    }
}

export default Header;