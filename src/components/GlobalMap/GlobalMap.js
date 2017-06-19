import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Header from './Header'
import Map from '../../shared/Map/Map'
import Footer from './Footer'

class GlobalMap extends React.Component {

    componentDidMount() {
        this.props.toggleGlobalMapComponent();
    }
    render() {
    console.log('is global map activated: ',this.props.globalMap.isGlobalMapActivated);
        return (
            <View>
                <Map/>
                <Footer/>
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
        toggleGlobalMapComponent: () => {
            dispatch({
                type: 'TOGGLE_GLOBAL_MAP_COMPONENT'
            })
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalMap);