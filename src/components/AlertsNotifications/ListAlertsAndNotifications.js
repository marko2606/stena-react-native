import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';

import {SwipeableFlatList} from 'react-native-swipeable-flat-list';

import AlertsNotificationListItem from './AlertsNotificationListItem'

import { styles } from './AlertsNotificationStyle';

import { getData } from '../../actions/index';

class ListAlertsAndNotifications extends React.Component {
    componentWillMount(){
        this.props.getDataAll();
    }

    constructor() {
        super();
        this.state = {
            loading: false
        }
    }

    onClickShowMore(item) {
        let itemKey = item.key;
        let items = this.props.dataStena;

        items[itemKey - 1].activeClick = !item.activeClick;

        this.setState({
            data: items
        })
    }

    _renderItem(item) {
        return <AlertsNotificationListItem styles={styles} item={item} onPress={this.onClickShowMore.bind(this)}/>
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
                <SwipeableFlatList
                    style={{ borderWidth: 0 }}
                    data={this.props.dataStena}
                    renderItem={({item}) => {
                        return this._renderItem(item)
                    }}
                    renderLeft={({ item }) => (
                        <Text style={{ width: 40, height: 65 }}>{item.name}</Text>
                    )}
                    renderRight={({ item }) => (
                        <Text style={{ width: 100, height: 65 }}>{item.name}</Text>
                    )}
                    keyExtractor={(item) => { return item.key }}
                    extraData={this.state}
                    ListFooterComponent={() => {
                        return this.renderFooter()
                    }}
                    onEndReachedThreshold={1}
                    onEndReached={({ distanceFromEnd }) => {
                        // TODO loader
                    }}
                />
{/*                <FlatList
                    data={this.props.dataStena}
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
                       // TODO loader
                    }}
                />*/}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataStena: state.alertsReducer.dataStena
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDataAll: () => {
            getData(dispatch)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAlertsAndNotifications)