import React from 'react';
import { View, Text } from 'react-native';

import Map from '../../../shared/Map/Map'
import Header from './Header'
import Footer from './Footer'

import { styles } from './styles'

class ShipDetails extends React.Component {
    render() {
        return (
            <View style={{height: '100%', backgroundColor:'red'}}>
                <Header/>
                <Map/>
                <Footer/>
            </View>
        )
    }
}

export default ShipDetails;