import React from 'react';
import { View } from 'react-native';

import { Dropdown } from '../../shared/';
import { filterGroup } from '../../utils/FilterGroupHelperData';
import { styles } from './AlertsNotificationStyle';

const AlertsNotificationsPicker = (props) => {
    const { dropdownStyle, dropdownTextStyle, textStyle, dropdownTextHighlightStyle } = styles;

    return (
        <View style={props.style.pickerContainer}>
            <Dropdown
                options={filterGroup.map(vessels => vessels.group)}
                dropdownStyle={dropdownStyle}
                dropdownTextStyle={dropdownTextStyle}
                textStyle={textStyle}
                dropdownTextHighlightStyle={dropdownTextHighlightStyle}
                onSelect={ (index) => index} // TODO function onSelect
                defaultValue="Filter Alerts by group"
                renderSeparator={() => { return null }}
            />
        </View>
    )
};

export default AlertsNotificationsPicker;
