import React from 'react';
import { View } from 'react-native';

import FooterFiltersShip from './FiltersVesselFooter';
import FilterList from './FiltersList';

import { styles } from './FiltersVesselStyle';

export const FiltersShip = () => {
    const { mainContainer } = styles;

    return (
        <View style={mainContainer}>
            <FilterList />
            <FooterFiltersShip />
        </View>
    );
};