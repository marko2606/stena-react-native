import React from 'react';
import { StyleSheet, View, Dimensions, Animated, PanResponder } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_TRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default class AlertNotifications extends React.Component {

    constructor(props){
        super(props);

        const position = new Animated.ValueXY({ x: 45, y: 0});

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_TRESHOLD) {
                    console.log('swipe right')
                    this.forceSwipe('right');
                } else if(gesture.dx < -SWIPE_TRESHOLD) {
                    console.log('left');
                    this.forceSwipe('left');
                } else {
                    this.resetPosition();
                }
            }
        });

        this.state = { panResponder, position }
    }

    forceSwipe(direction) {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x: x, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start();
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 45, y: 0 }
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
           inputRange: [-SCREEN_WIDTH *1.5, 0, SCREEN_WIDTH *1.5],
           outputRange: ['0deg', '0deg', '0deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate: rotate }]
        };
    }

    render() {
        return (
            <Animated.View
                style={this.getCardStyle()}
                { ...this.state.panResponder.panHandlers }
            >
                <View style={{ flexDirection: 'row'}}>
                    <View style={styles.ball} />
                    <View style={styles.swipeInfoIcons}/>
                </View>

{/*                <View style={styles.ball}>
                    <View style={styles.swipeInfoIcons}/>
                </View>*/}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 30,
        width: 90,
        backgroundColor: 'black'
    },
    swipeInfoIcons: {
        height: 30,
        width: 45,
        backgroundColor: 'red'
    }
});
