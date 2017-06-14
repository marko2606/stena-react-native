import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import AlertsNotificationListItem from './AlertsNotificationListItem'
import { data } from '../../utils/AlertsDataHelper';

import { styles } from './AlertsNotificationStyle';

export default class ListAlertsAndNotifications extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            data: data
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
                       // TODO loader
                    }}
                />
            </View>
        );
    }
}