import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'

import Swipe from './Swipe';

export default class ListAlertsAndNotifications extends React.Component {

    constructor(){
        super();
        this.state = {
            loading: false,
            data: [
                {
                    key: 1,
                    name: 'Stena 1',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 2,
                    name: 'Stena 2',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 3,
                    name: 'Stena 3',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 4,
                    name: 'Stena 4',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 5,
                    name: 'Stena 5',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 6,
                    name: 'Stena 6',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 7,
                    name: 'Stena 7',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 8,
                    name: 'Stena 8',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 9,
                    name: 'Stena 9',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 10,
                    name: 'Stena 10',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 11,
                    name: 'Stena 11',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 12,
                    name: 'Stena 12',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 13,
                    name: 'Stena 13',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 14,
                    name: 'Stena 14',
                    status: 'active',
                    activeClick: false
                },
                {
                    key: 15,
                    name: 'Stena 15',
                    status: 'active',
                    activeClick: false
                }
            ],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        }
    }

    onClickShowMore(item) {
/*        let itemKey = item.key;
        let items = this.state.data;

        items[itemKey - 1].activeClick = !item.activeClick;

        this.setState({
            data: items
        })*/
    }

    moreInfoAfterClick(item) {
        return (
            <View>
                <Text style={{ color: 'white', marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                    Vessel status is - {item.status}.
                </Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Icon
                        name='clear'
                        color='rgb(32, 177, 151)'
                        iconStyle={{ marginLeft: 10 }}
                    />
                    <Text style={styles.iconsText}>DISMISS</Text>

                    <Icon
                        name='location-searching'
                        color='rgb(32, 177, 151)'
                    />
                    <Text style={styles.iconsText}>LOCATE</Text>

                    <Icon
                        name='line-style'
                        color='rgb(32, 177, 151))'
                    />
                    <Text style={styles.iconsText}>DETAILS</Text>
                </View>
            </View>
        )
    }

    _renderItem(item) {
        return (
            <View style={styles.touchableContainer}>
                <TouchableOpacity
                    style={styles.touchableAlert}
                    onPress={() => { return this.onClickShowMore(item) }}
                >
                    <Icon
                        name='warning'
                        color='rgb(156, 57, 53)'
                        iconStyle={{ marginLeft: 15, paddingRight: 15 }}
                    />

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: 'white' }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: 'rgb(146, 164, 170)', fontSize: 10 }}>SPEED OVER 15% INSTRUCTED</Text>
                    </View>

                </TouchableOpacity>

                <Swipe/>

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

    swipeInformation() {
        return (
            <View style={styles.listHeader}>
                <Text style={{ color: 'rgba(186, 204, 210, 0.5)' }}>SWIPE TO RIGHT FOR MORE OPTIONS</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
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
                    ListHeaderComponent={() => {
                        return this.swipeInformation()
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 65,
        marginTop: 5,
        flex: 1
    },
    touchableContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        borderTopWidth: 0.5,
        borderColor: 'rgba(186, 204, 210, 0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    touchableAlert: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsText: {
        fontSize: 10,
        color: 'white',
        marginLeft: -40,
        paddingRight: 10
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15
    }
});
