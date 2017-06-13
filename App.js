import React from 'react';
import { View } from 'react-native';

import Router from "./src/Router";
import { styles } from './src/GlobalStyle';

export default class App extends React.Component {
    render() {
        const { globalContainer } = styles;
        return (
            <View style={globalContainer}>
                <Router/>
            </View>
        );
    }
};

