import React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { mapStyle } from './mapStyle';
import { connect } from 'react-redux'

import { styles } from '../../components/GlobalMap/ShipDetailsMap/styles'
import { displayFooterSelectionDetails } from '../../components/GlobalMap/GlobalMapActions'

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            smallMap: false
        }
    }
    render() {
        return (
            <View style={[styles.map, {height: this.props.globalMap.mapHeight}]}>
                <MapView
                    style={{height: '100%'}}
                    customMapStyle={mapStyle}
                    onPress={() => this.props.displayFooterSelectionDetails()}
                >
                    <MapView.Marker
                        coordinate={{latitude: -8.059229627200192, longitude: 4.482421875}}
                        identifier={'neki key od markera'}
                        onPress={(event) => console.log('Marker Pressed!', event.nativeEvent.identifier)}
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