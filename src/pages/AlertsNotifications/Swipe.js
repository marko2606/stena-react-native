import React from 'react';
import { StyleSheet, View, Dimensions, Animated, PanResponder } from 'react-native';

import { Icon } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_TRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default class AlertNotifications extends React.Component {

    constructor(props){
        super(props);

        const position = new Animated.ValueXY({ x: 140, y: 0});

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_TRESHOLD) {
                    this.forceSwipe('right');
                } else if(gesture.dx < -SWIPE_TRESHOLD) {
                    this.forceSwipe('left');
                } else {
                    this.resetPosition();
                }
            }
        });

        const iconForSwiping = false;

        this.state = { panResponder, position, iconForSwiping }
    }

    forceSwipe(direction) {
        const x = direction === 'right' ? 140 : 0;
        Animated.timing(this.state.position, {
            toValue: { x: x, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start();
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 140, y: 0 }
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

    renderIconForSwipe() {
        if (this.state.iconForSwiping) {
            return (
                <Icon
                    name="keyboard-arrow-right"
                    color='rgb(146, 164, 170)'
                    iconStyle={{ paddingRight: 10 }}
                />
            )
        } else {
            return (
                <Icon
                    name="keyboard-arrow-left"
                    color='rgb(146, 164, 170)'
                    iconStyle={{ paddingRight: 10 }}
                />
            )
        }
    }

    render() {
        return (
            <Animated.View
                style={this.getCardStyle()}
                { ...this.state.panResponder.panHandlers }
            >
                <View style={styles.container}>

                    <View style={styles.arrowSwipe}>
                        {this.renderIconForSwipe()}
                    </View>

                    <View style={styles.swipeInfoIcons}>
                        <Icon
                            name="clear"
                            color='rgb(0, 0, 0)'
                            iconStyle={{ borderRightColor: 'black', borderRightWidth: 0.5, paddingLeft: 10, paddingRight: 10 }}
                            onPress={() => console.log('clear')}
                        />
                        <Icon
                            name="location-searching"
                            color='rgb(0, 0, 0)'
                            iconStyle={{ borderRightColor: 'black', borderRightWidth: 0.5, paddingLeft: 10, paddingRight: 10 }}
                            onPress={() => console.log('location')}
                        />
                        <Icon
                            name="line-style"
                            color='rgb(0, 0, 0)'
                            iconStyle={{ paddingLeft: 10, paddingRight: 10 }}
                            onPress={() => console.log('details')}
                        />
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowSwipe: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    swipeInfoIcons: {
        height: 40,
        backgroundColor: 'rgb(32, 177, 151)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

