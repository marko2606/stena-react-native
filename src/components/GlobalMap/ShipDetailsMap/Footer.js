import React from 'react';
import { View, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles'
import IconFooter from './IconFooter'
import { connect } from 'react-redux';

import {displayFooterSelectionDetails} from '../GlobalMapActions'

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            deviceWidth: Dimensions.get('screen').width
        }
    }


    render() {
        console.log('footer ',this.props);
        return (
            <View style={[styles.footer, {height: this.props.GlobalMapReducer.footerHeight}]}>
                <IconFooter
                    name='list'
                    size={22}
                    color="white"
                    text="OverView"
                    onPress={() => this.props.displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='phone'
                    size={22}
                    color="white"
                    text="Contact"
                    onPress={() => this.props.displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='suitcase'
                    size={22}
                    color="white"
                    text="Cargo"
                    onPress={() => this.props.displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='documents'
                    size={22}
                    color="white"
                    text="Bunker info"
                    onPress={() => this.props.displayFooterSelectionDetails()}
                />
                <IconFooter
                    name='address'
                    size={22}
                    color="white"
                    text="Itinerary"
                    onPress={() => this.props.displayFooterSelectionDetails()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        GlobalMapReducer: state.GlobalMapReducer
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);