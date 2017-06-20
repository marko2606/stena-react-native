import React from 'react';
import { View } from 'react-native';

import FiltersVesselFooter from './FiltersVesselFooter';
import FiltersList from './FiltersList';

import { styles } from './FiltersVesselStyle';

export const FiltersVessel = () => {
    const { mainContainer } = styles;

    return (
        <View style={mainContainer}>
            <FiltersList />
            <FiltersVesselFooter />
        </View>
    );
};