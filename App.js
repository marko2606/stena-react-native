import React from 'react';
import { View } from 'react-native';
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

const styles = {
    container: {
        flex: 1
    },
};
