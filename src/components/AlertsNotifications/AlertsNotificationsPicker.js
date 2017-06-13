import React from 'react';
import { Picker, View } from 'react-native';

const AlertsNotificationsPicker = (props) => {
    return (
        <View style={props.style.pickerContainer}>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange.bind(this)}
                style={props.style.pickerStyle}
            >
                <Picker.Item label="Filter Alerts by group..." value="initial" />
                <Picker.Item label="ALL VESSELS" value="allVessels" />
                <Picker.Item label="MY FLEET" value="myFleet" />
                <Picker.Item label="SUEZMAX" value="suezmax" />
                <Picker.Item label="STENA BULK" value="stenaBulk" />
                <Picker.Item label="STENA WECO" value="stenaWeco" />
                <Picker.Item label="GOLDEN STENA WECO" value="goldenStenaWeco" />
                <Picker.Item label="STENA LNG" value="stenaLng" />
            </Picker>
        </View>
    )
};

export default AlertsNotificationsPicker;
