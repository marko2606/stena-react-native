import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../shared/Map/mapStyle'

class MapOverview extends React.Component {
    constructor() {
        super();
        this.state = {
            mapFlex: 8,
            footerFlex: 1,
            isOverViewDisplayed: false,
            smallMap: false
        }
    }
    overViewPress() {
        console.log('overViewPress');
        if(!this.state.isOverViewDisplayed) {
            this.setState({
                mapFlex: 3,
                footerFlex: 6,
                isOverViewDisplayed: true
            })
        } else {
            this.setState({
                mapFlex: 8,
                footerFlex: 1,
                isOverViewDisplayed: false,
                smallMap: !this.state.smallMap
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header css={styles.header}/>
                <Map
                    latitude={this.state}
                    smallMap={this.state.smallMap}
                    css={Object.assign({flex: this.state.mapFlex}, styles.map)}
                    overViewPress={this.overViewPress.bind(this)}
                />
                <Footer
                    css={Object.assign({flex: this.state.footerFlex}, styles.footer)}
                    overViewPress={this.overViewPress.bind(this)}
                />
            </View>
        );
    }
}

export default MapOverview;