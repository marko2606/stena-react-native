import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LogIn from './src/components/LogIn/LogIn'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LogIn/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
