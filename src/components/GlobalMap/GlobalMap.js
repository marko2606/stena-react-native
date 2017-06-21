import React from 'react'
import { View } from 'react-native'

import Map from '../../shared/Map/Map'
import Footer from './Footer'

class GlobalMap extends React.Component {

    render() {
        return (
            <View>
                <Map/>
                <Footer/>
            </View>
        )
    }
}

export default GlobalMap;