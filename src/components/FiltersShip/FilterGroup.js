import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

export const FilterGroup = ({heading, renderFilterList, onPress, Icon}) => {

    return (
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray', paddingTop: 15, paddingBottom: 15 }}>
            <TouchableWithoutFeedback
                onPress={onPress}
            >
                <View style={{ flexDirection: 'row' }}>
                    {Icon}
                    <Text style={{ color: 'white', fontSize: 18, paddingLeft: 5 }}>
                        {heading.toUpperCase()}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            {renderFilterList}
        </View>
    )
};