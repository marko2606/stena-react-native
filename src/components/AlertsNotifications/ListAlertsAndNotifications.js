import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'

import { data } from '../../utils/AlertsDataHelper';

import { styles } from './style';
import { colors2 } from '../../Colors';

export default class ListAlertsAndNotifications extends React.Component {

    constructor(){
        super();
        this.state = {
            loading: false,
            data: data,
        }
    }

    onClickShowMore(item) {
        let itemKey = item.key;
        let items = this.state.data;

        items[itemKey - 1].activeClick = !item.activeClick;

        this.setState({
            data: items
        })
    }

    moreInfoAfterClick(item) {
        const { vesselInformationText, iconContainer, iconsText } = styles;

        return (
            <View>
                <Text style={vesselInformationText}>
                    Vessel status is - {item.status}.
                </Text>

                <View style={iconContainer}>
                    <Icon
                        name='clear'
                        color={colors2['mainGreen']}
                        iconStyle={{ marginLeft: 10 }}
                    />
                    <Text style={iconsText}>DISMISS</Text>

                    <Icon
                        name='location-searching'
                        color={colors2['mainGreen']}
                    />
                    <Text style={iconsText}>LOCATE</Text>

                    <Icon
                        name='line-style'
                        color={colors2['mainGreen']}
                    />
                    <Text style={iconsText}>DETAILS</Text>
                </View>
            </View>
        )
    }

    _renderItem(item) {
        const { touchableContainer, touchableAlert } = styles;

        return (
            <View style={touchableContainer}>
                <TouchableOpacity
                    style={touchableAlert}
                    onPress={() => { return this.onClickShowMore(item) }}
                >
                    <Icon
                        name='warning'
                        color={colors2['redWarning']}
                        iconStyle={{ marginLeft: 10 }}
                    />

                    <View style={{ flexDirection: 'column', marginLeft: -30 }}>
                        <Text style={{ color: 'white' }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: 'rgb(146, 164, 170)', fontSize: 10 }}>SPEED OVER 15% INSTRUCTED</Text>
                    </View>

                    {
                        item.activeClick ?
                            <Icon
                                name="keyboard-arrow-up"
                                color='rgb(146, 164, 170)'
                                iconStyle={{ marginRight: 10 }}
                            />
                            :
                            <Icon
                                name="keyboard-arrow-down"
                                color='rgb(146, 164, 170)'
                                iconStyle={{ marginRight: 10 }}
                            />
                    }
                </TouchableOpacity>

                {
                    item.activeClick ? this.moreInfoAfterClick(item) : null
                }

            </View>
        )
    }

    renderFooter(){
        if(!this.state.loading) {
            return null;
        }

        return (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator animating size="large" />
            </View>
        )
    }
    render() {
        const { listContainer } = styles;
        return (
            <View style={listContainer}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => {
                       return this._renderItem(item)
                    }}
                    keyExtractor={(item) => { return item.key }}
                    extraData={this.state}
                    ListFooterComponent={() => {
                        return this.renderFooter()
                    }}
                    onEndReachedThreshold={1}
                    onEndReached={({ distanceFromEnd }) => {
                       // console.log('on end reached ', distanceFromEnd);
                    }}
                />
            </View>
        );
    }
}