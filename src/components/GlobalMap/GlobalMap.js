import React from 'react'
import { View, Text } from 'react-native'

import Header from './Header'
import Map from '../../shared/Map/Map'
import Footer from './Footer'

class GlobalMap extends React.Component {
    render() {
        return (
            <View>
                <Header/>
                <Map/>
                <Footer/>
            </View>
        )
    }
}

export default GlobalMap;