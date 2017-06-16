import React from 'react';
import { View } from 'react-native';

import FooterFiltersShip from './FooterFiltersShip';
import FilterList from './FiltersList';

export default class FiltersShip extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1b546a', paddingBottom: 30 }}>
                <FilterList />
                <FooterFiltersShip />
            </View>
        );
    }
}
