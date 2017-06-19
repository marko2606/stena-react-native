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
        Actions.refresh({type: 'reset'})
        Actions.shipDetailsMap();
    }
    render() {
        return (
            <View style={[styles.map, {height: this.props.globalMap.mapHeight}]}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{height: '100%'}}
                    customMapStyle={mapStyle}
                    onPress={() => this.props.displayFooterSelectionDetails()}
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

const mapDispatchToProps = (dispatch) => {
    return {
        displayFooterSelectionDetails: () => {
            dispatch({
                type: 'TOGGLE_FOOTER_SELECTION_DETAILS'
            })
        }
    }
};

export default connect(mapStateToProps, {displayFooterSelectionDetails})(Map);