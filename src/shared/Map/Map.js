import React from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from './mapStyle';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

import { styles } from '../../components/GlobalMap/ShipDetailsMap/styles'
import { displayFooterSelectionDetails } from '../../components/GlobalMap/GlobalMapActions'

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            smallMap: false
        }
    }

    displayShipDetails() {
        console.log('remote to ship details');
        Actions.shipDetailsMap({latitude: -8.059229627200192, longitude: 4.482421875});
    }

    zoomToMarker() {
        let {latitude, longitude} = this.props;
        if(latitude && longitude) {
            return {
                latitude,
                longitude,
                latitudeDelta: 0.12, // hardcoded for now
                longitudeDelta: 0.065,}
        } else {
            return null;
        }
    }
    render() {
        return (
            <View style={[styles.map, {height: this.props.globalMap.mapHeight}]}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{height: '100%'}}
                    customMapStyle={mapStyle}
                    onPress={() => this.props.displayFooterSelectionDetails()}
                    initialRegion={this.zoomToMarker()}
                >
                    <MapView.Marker
                        coordinate={{latitude: -8.059229627200192, longitude: 4.482421875}}
                        onPress={() => this.displayShipDetails()}
                    />
                </MapView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalMap: state.GlobalMapReducer
    }
};


export default connect(mapStateToProps, {displayFooterSelectionDetails})(Map);