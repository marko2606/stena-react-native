import React from 'react';
import { View } from 'react-native';

import { colors } from '../../Colors';
import { Dropdown } from '../../shared/';

const filterGroup = [
    'ALL VESSELS',
    'MY FLEET',
    'SUEZMAX',
    'STENA BULK',
    'STENA WECO',
    'GOLDEN STENA WECO',
    'STENA LNG',
    'MORE OPTIONS',
    'MORE OPTIONS',
];

const AlertsNotificationsPicker = (props) => {
    return (
        <View style={props.style.pickerContainer}>
            <Dropdown
                dropdownStyle={{ flex: 1, width: '91%', height: '60%', backgroundColor: 'transparent', borderWidth: 0 }}
                options={filterGroup}
                onSelect={ (index) => console.log(index)} // TODO
                dropdownTextStyle={{ fontSize: 16, padding: 5, color: colors['whiteColor'], backgroundColor: colors['primaryColor2'] }}
                textStyle={{ color: colors['grayColor'], padding: 12, fontSize: 13, borderColor: 'red' }}
                defaultValue="Filter Alerts by group"
                dropdownTextHighlightStyle={{ color: colors['primaryColor1'] }}
            />
        </View>
    )
};

export default AlertsNotificationsPicker;
