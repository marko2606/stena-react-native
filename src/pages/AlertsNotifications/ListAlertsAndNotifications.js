import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'

const vessels = [
    {
        key: 1,
        name: 'Stena 1',
        status: 'active'
    },
    {
        key: 2,
        name: 'Stena 2',
        status: 'active'
    },
    {
        key: 3,
        name: 'Stena 3',
        status: 'active'
    },
    {
        key: 4,
        name: 'Stena 4',
        status: 'active'
    },
    {
        key: 5,
        name: 'Stena 5',
        status: 'active'
    },
    {
        key: 6,
        name: 'Stena 6',
        status: 'active'
    },
    {
        key: 7,
        name: 'Stena 7',
        status: 'active'
    },
    {
        key: 8,
        name: 'Stena 8',
        status: 'active'
    },
    {
        key: 9,
        name: 'Stena 9',
        status: 'active'
    },
    {
        key: 10,
        name: 'Stena 10',
        status: 'active'
    }
];

/*this.state = {
    activeClick: false
};*/

export default class ListAlertsAndNotifications extends React.Component {

    constructor(){
        super();
        this.state = {
            activeClick: false
        }

    }

    onClickShowMoreInfo() {
        return (
            <Text style={{ color: 'white', marginTop: 10 }}>More information about vessel</Text>
        )
    }

    _renderItem({item}) {
        return (
            <View style={styles.touchableContainer}>
                <TouchableOpacity
                    style={styles.touchableAlert}
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

                    <Icon
                        name="keyboard-arrow-down"
                        color='rgb(146, 164, 170)'
                        iconStyle={{ marginRight: 10 }}
                    />
                </TouchableOpacity>

{/*                {
                    this.state.activeClick ? (
                        <View>
                            <Text style={{ color: 'white', marginTop: 10 }}>More information about vessel</Text>
                        </View>
                    ): null
                }*/}

            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={vessels}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 40,
        marginTop: 10,
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
    }
});