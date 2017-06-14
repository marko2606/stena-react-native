import React from 'react';
import { View } from 'react-native';

import { Dropdown } from '../../shared/';
import filterGroup from '../../utils/FilterDropdownGroup';
import { styles } from './AlertsNotificationStyle';

const AlertsNotificationsPicker = (props) => {
    const { dropdownStyle, dropdownTextStyle, textStyle, dropdownTextHighlightStyle } = styles;

    return (
        <View style={props.style.pickerContainer}>
            <Dropdown
                options={filterGroup}
                dropdownStyle={dropdownStyle}
                dropdownTextStyle={dropdownTextStyle}
                textStyle={textStyle}
                dropdownTextHighlightStyle={dropdownTextHighlightStyle}
                onSelect={ (index) => console.log(index)} // TODO
                defaultValue="Filter Alerts by group"
                renderSeparator={() => { return null }}
            />
        </View>
    )
};

export default AlertsNotificationsPicker;
