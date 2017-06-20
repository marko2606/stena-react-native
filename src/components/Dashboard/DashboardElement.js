import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Counter } from '../../shared/Counter/Counter';
import icoMoonConfig from '../../utils/config.json';

import {styles} from './DashboardStyle';
import {colors} from '../../Colors';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const dashboardProfileHeight = 110; // TODO this will change when router is implemented
const itemsPerRow = 3;

const boxHeight = (height / itemsPerRow) - dashboardProfileHeight;
const boxWidth = width / itemsPerRow;

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

export class DashboardElement extends Component {
    constructor() {
        super();
        this.state = {
            dashboardElementTitleColor: {
                color: colors['whiteColor']
            },
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../assets/fonts/icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }

    _onPress() {
        this.setState({
            dashboardElementTitleColor: {
                color: colors['primaryColor1']
            }
        });
    }

    _onPressOut() {
        this.setState({
            dashboardElementTitleColor: {
                color: colors['whiteColor']
            }
        });
    }

    _renderCounter() {
        if (this.props.counter) {
            return <Counter positionLeft={25} fontSize={12} size={this.props.counter}/>
        }
    }

    _changeRoute() {
        Actions.alerts();
    }

    render() {
        const {dashboardElementContainer, dashboardElementTitle, dashboardElementIcon} = styles;

        if (!this.state.fontLoaded) { return null;}

        return (

            <TouchableHighlight onPress={this._changeRoute.bind(this)}
                                underlayColor="transparent"
                                onShowUnderlay={this._onPress.bind(this)}
                                onHideUnderlay={this._onPressOut.bind(this)}>
                <View style={{...dashboardElementContainer, height: boxHeight, width: boxWidth}}>
                    <View>
                        <Icon name={this.props.icon} size={45} style={dashboardElementIcon}/>
                        {this._renderCounter()}
                    </View>
                    <Text
                        style={{...dashboardElementTitle, ...this.state.dashboardElementTitleColor}}>{this.props.title.toUpperCase()}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}