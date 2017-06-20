import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon, Ionicons } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux';

import icoMoonConfig from '../../utils/config.json';
import { styles } from './CustomNavBarStyle';

import { Counter } from '../../shared/Counter/Counter';

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
        } else if (this.props.leftIcon && this.props.leftIcon === 'back-button') {
            return (
                <TouchableWithoutFeedback
                    onPress={() => Actions.pop()}
                >
                    <Ionicons style={[styles.navbarIcon, styles.indentLeft]} name="ios-arrow-back" size={20} />
                </TouchableWithoutFeedback>
            )
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

    _renderRightAlertIcon() {
        if(this.props.rightIconAlert) {
            return (
                <View style={{ marginRight: 12 }}>
                    <Icon name={this.props.rightIconAlert} size={20} style={[styles.navbarIcon]}/>
                    <Counter positionLeft={12} fontSize={6} size={5}/>
                </View>
            )
        }
    }

    render() {
        if (!this.state.fontLoaded) { return null;}

        let justifyContent = this.props.icons ? { justifyContent: 'space-between' } : { justifyContent: 'center' };

        return (
            <View style={[styles.navbarContainer,  justifyContent]}>
                {this._renderLeftIcon()}
                <Text style={styles.navbarTitle}>{this.props.title.toUpperCase()}</Text>
                <View style={styles.rightIconContainer}>
                    {this._renderRightIcon()}
                    {this._renderRightAlertIcon()}
                </View>
            </View>
        );
    }
}

export default CustomNavBar;