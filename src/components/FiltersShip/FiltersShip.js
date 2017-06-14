import React from 'react';
import { View, Text } from 'react-native';

import FooterFiltersShip from './FooterFiltersShip';
import FiltersList from './FiltersList';


export default class FiltersShip extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1b546a' }}>
                <FiltersList />
                <FooterFiltersShip />
            </View>
        );
    }
}
