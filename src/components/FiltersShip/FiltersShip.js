import React from 'react';
import { View } from 'react-native';

import FooterFiltersShip from './FooterFiltersShip';
import FilterList from './FiltersList';

import { styles } from './FiltersShipStyle';

export const FiltersShip = () => {
    const { mainContainer } = styles;

    return (
        <View style={mainContainer}>
            <FilterList />
            <FooterFiltersShip />
        </View>
    );
};