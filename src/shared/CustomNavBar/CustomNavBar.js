import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux';

import icoMoonConfig from '../../utils/config.json';
import { styles } from './CustomNavBarStyle';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class CustomNavBar extends Component {
    constructor(props) {
        super(props);
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

    _renderLeftIcon() {
        if (this.props.leftIcon && this.props.leftIcon === 'dashboard') {
            return <Icon
                name={this.props.leftIcon}
                size={20}
                style={[styles.navbarIcon, styles.indentLeft]}
                onPress={() => Actions.dashboard()}
            />
        }
    }

    _renderRightIcon() {
        if (this.props.rightIcon) {
            return <Icon
                name={this.props.rightIcon}
                size={20}
                style={[styles.navbarIcon, styles.indentRight]}
            />
        }
    }

    render() {
        if (!this.state.fontLoaded) { return null;}

        let justifyContent = this.props.icons ? { justifyContent: 'space-between' } : { justifyContent: 'center' };

        return (
            <View style={[styles.navbarContainer,  justifyContent]}>
                {this._renderLeftIcon()}
                <Text style={styles.navbarTitle}>{this.props.title.toUpperCase()}</Text>
                {this._renderRightIcon()}
            </View>
        );
    }
}

export default CustomNavBar;