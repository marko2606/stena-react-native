import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native'

import { FilterGroup } from './FilterGroup';
import filterList from '../../utils/FilterDropdownGroup';

class FiltersList extends Component {

    constructor() {
        super();
        this.state = {
            activeFilter: false
        }
    }

    renderFilterList() {
        return filterList.map((filter, index) => {
            return (
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text>{filter}</Text>
                    <View style={{ height: 10, width: 10, backgroundColor: 'green' }}/>
                </View>
            )
        })
    }

    render() {
        return (
            <View>
                <FilterGroup
                    heading='Filter by groups'
                    renderFilterList={this.state.activeFilter ? this.renderFilterList() : null}
                />

                <FilterGroup
                    heading='Filter by segment'
                    renderFilterList={this.state.activeFilter ? this.renderFilterList() : null}
                />

                <FilterGroup
                    heading='Filter by company'
                    renderFilterList={this.state.activeFilter ? this.renderFilterList() : null}
                />

                <FilterGroup
                    heading='Filter by vessel type'
                    renderFilterList={this.state.activeFilter ? this.renderFilterList() : null}
                />
            </View>
        );
    }
}

export default FiltersList;