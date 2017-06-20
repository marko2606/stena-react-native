import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'

import Map from '../../../shared/Map/Map'
import Footer from './Footer'
import { displayFooterSelectionDetailsAction } from './ShipDetailsMapActions'

class ShipDetails extends React.Component {
    render() {
        let {latitude, longitude, displayFooterSelectionDetails, GlobalMapReducer} = this.props;
        return (
            <View>
                <Map
                    latitude={latitude}
                    longitude={longitude}
                    displayFooterSelectionDetails={displayFooterSelectionDetails}
                />
                <Footer
                    displayFooterSelectionDetails={displayFooterSelectionDetails}
                    footerHeight={GlobalMapReducer.footerHeight}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        GlobalMapReducer: state.ShipDetailsMapMapReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        displayFooterSelectionDetails: () => {
            displayFooterSelectionDetailsAction(dispatch);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetails);