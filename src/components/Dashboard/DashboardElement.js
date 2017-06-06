import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Counter } from '../../shared/Counter/Counter';
import icoMoonConfig from '../../utils/config.json';

import {styles} from './DashboardStyle';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const boxHeight = (height / 3) - 110;
const boxWidth = width / 3;

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

export class DashboardElement extends Component {
    constructor() {
        super();
        this.state = {
            dashboardElementTitleColor: {
                color: '#fff'
            },
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../assets/fonts/Icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }

    _onPress() {
        this.setState({
            dashboardElementTitleColor: {
                color: '#28FFCA'
            }
        });
    }

    _onPressOut() {
        this.setState({
            dashboardElementTitleColor: {
                color: '#fff'
            }
        });
    }

    _renderCounter() {
        if (this.props.counter) {
            return <Counter size={this.props.counter}/>
        }
    }

    render() {
        const {dashboardElementContainer, dashboardElementTitle} = styles;

        if (!this.state.fontLoaded) { return null;}

        return (

            <TouchableHighlight onPress={() => {
            }}
                                underlayColor="transparent"
                                onShowUnderlay={this._onPress.bind(this)}
                                onHideUnderlay={this._onPressOut.bind(this)}>
                <View style={{...dashboardElementContainer, height: boxHeight, width: boxWidth}}>
                    <Icon name={this.props.icon} size={50} color="#28FFCA"/>
                    <Text
                        style={{...dashboardElementTitle, ...this.state.dashboardElementTitleColor}}>{this.props.title.toUpperCase()}</Text>
                    {this._renderCounter()}
                </View>
            </TouchableHighlight>
        )
    }
}