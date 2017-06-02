import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker } from 'react-native';

import { Icon } from 'react-native-elements'

import { Gradient } from '../../components/Gradient';
import { Footer } from '../../components/FooterAlertsNotifications';

import List from './ListAlertsAndNotifications';

export default class AlertNotifications extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedFilterAlerts: 'initial'
        }
    }

    render() {
        return (
            <Gradient>
                <View style={styles.container}>

                    {/* --- Top buttons --- */}
                    <View style={styles.topButtons}>
                        <TouchableOpacity style={[styles.buttonsStyle, { backgroundColor: 'rgb(32, 177, 151)'} ]}>
                            <Text style={styles.buttonText}>ACTIVE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonsStyle} >
                            <Text style={styles.buttonText}>DISMISSED</Text>
                        </TouchableOpacity>
                    </View>

                    {/* --- Filter bar --- */}
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={this.state.selectedFilterAlerts}
                            onValueChange={(filter) => this.setState({ selectedFilterAlerts: filter })}
                            style={{ color: 'rgb(146, 164, 170)' }}
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

                    {/* --- Alerts and Notifications list --- */}
                    <List />

                </View>

                <Footer>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Icon
                            name='warning'
                            color='rgb(156, 57, 53)'
                            iconStyle={{ marginTop: 6 }}
                        />

                        <Icon
                            name='notifications-active'
                            color='white'
                            iconStyle={{ marginTop: 6 }}
                        />
                    </View>
                </Footer>

            </Gradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10
    },
    buttonsStyle: {
        height: 40,
        width: '45%',
        borderWidth: 1,
        borderColor: 'rgb(32, 177, 151)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent'
    },

    pickerContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        backgroundColor: 'rgb(11, 41, 53)'
    }
});

// 11 41 53
// 146 164 170  gray