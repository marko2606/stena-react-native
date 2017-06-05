import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'


const HEIGHT_DEVICE = Dimensions.get('window').height;

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
        let itemKey = item.key;
        let items = this.state.data;

        items[itemKey - 1].activeClick = !item.activeClick;

        this.setState({
            data: items
        })
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
                        console.log('on end reached ', distanceFromEnd);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 65,
        marginTop: 5,
        flex: 1
    },
    touchableContainer: {
        backgroundColor: 'rgb(11, 41, 53)',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(32, 177, 151, 0.5)'
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
    }
});