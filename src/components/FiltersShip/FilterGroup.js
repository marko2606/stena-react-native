import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

export const FilterGroup = ({heading, renderFilterList}) => {

    return (
        <View>
            <TouchableWithoutFeedback>
                <View>
                    <Text>{heading}</Text>
                </View>
            </TouchableWithoutFeedback>
            {renderFilterList}
        </View>
    )
};