import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

import { styles } from './FiltersShipStyle';

export const FilterGroup = ({ heading, renderFilterList, onPress, Icon }) => {
    const { filterGroupContainer, filterGroupView, textHeading } = styles;

    return (
        <View style={filterGroupContainer}>
            <TouchableWithoutFeedback
                onPress={onPress}
            >
                <View style={filterGroupView}>
                    {Icon}
                    <Text style={textHeading}>
                        {heading.toUpperCase()}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            {renderFilterList}
        </View>
    )
};