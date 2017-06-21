import React from 'react';
import CheckBox from 'react-native-check-box'
import { Text, View } from 'react-native';

import { styles } from './FiltersVesselStyle';

export const FiltersCheckbox = ({ vesselsName, numberOfVessels }) => {

    function checkedImage() {
        const { checkedImageContainer, checkedImageView } = styles;
        return (
            <View style={checkedImageContainer}>
                <View style={checkedImageView}/>
            </View>
        )
    }

    function unCheckedImage() {
        const { checkedImageContainer } = styles;
        return <View style={checkedImageContainer}/>
    }

    function vesselsPerGroup(vesselsName, numberOfVessels) {
        const { leftTextContainer, leftTextVesselName, leftTextNumberOfVessels } = styles;
        return (
            <View style={leftTextContainer}>
                <Text style={leftTextVesselName}>{vesselsName}</Text>
                <Text style={leftTextNumberOfVessels}>({numberOfVessels})</Text>
            </View>
        )
    }

    const { checkBoxMain } = styles;

    return (
        <CheckBox
            style={checkBoxMain}
            onClick={()=> null}
            isChecked={false}
            checkedImage={checkedImage()}
            unCheckedImage={unCheckedImage()}
            leftTextView={vesselsPerGroup(vesselsName, numberOfVessels)}
        />
    )
};