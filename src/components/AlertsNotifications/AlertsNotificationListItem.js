import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native'
import {Font} from 'expo';
import {createIconSetFromIcoMoon} from '@expo/vector-icons';

import AlertsNotificationsMoreInfo from './AlertsNotificationsMoreInfo';
import icoMoonConfig from '../../utils/config.json';
import {colors2} from '../../Colors';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class AlertsNotificationListItem extends Component {
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

    moreInfoAfterClick() {
        return <AlertsNotificationsMoreInfo styles={this.props.styles} item={this.props.item}/>
    }

    render() {
        const {touchableContainer, touchableAlert, touchableContent, detailContent, titleContent} = this.props.styles;

        if (!this.state.fontLoaded) {
            return null;
        }

        return (
            <View style={touchableContainer}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        return this.props.onPress(this.props.item)
                    }}
                >
                    <View style={touchableAlert}>
                        <Icon name='warning' color={colors2['redWarning']} size={30}/>
                        <View style={touchableContent}>
                            <Text style={titleContent}>
                                {this.props.item.name}
                            </Text>
                            <Text style={detailContent}>SPEED OVER 15% INSTRUCTED</Text>
                        </View>
                        {
                            this.props.item.activeClick ?
                                <Icon name="keyboard_arrow_up" size={25} color={colors2['gray']}/>
                                :
                                <Icon name="keyboard_arrow_down" size={25} color={colors2['gray']}/>
                        }
                    </View>
                </TouchableWithoutFeedback>
                { this.props.item.activeClick ? this.moreInfoAfterClick(this.props.item) : null }
            </View>
        );
    }
}

export default AlertsNotificationListItem;