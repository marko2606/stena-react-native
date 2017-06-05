import React from 'react';
import { View, Image, Text, Keyboard, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Icon } from 'react-native-elements';
import { Components } from 'expo';
const { LinearGradient } = Components;

import Input from './Input';
import LoginBtn from './LoginBtn';

export default class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputPosition: 'relative',
            inputBottom: 0
        };

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillMount () {
        LayoutAnimation.spring();
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow(e) {
        LayoutAnimation.spring();
        this.setState({
            inputPosition: 'absolute',
            inputBottom: e.endCoordinates.height
        });

    }

    keyboardDidHide() {
        console.log('keyboard down!');
        this.setState({
            inputPosition: 'relative',
            inputBottom: 0
        });
    }

    render() {
        return (
            <LinearGradient
                colors={['#1D7B77', '#154253', '#0D2832']}
                style={styles.gradient}
                start={[-.7, 0.4]}
            >
                <View style={styles.container}>
                    <Icon
                        iconStyle={{
                            marginTop: 50
                        }}
                        name='flag'
                        type='font-awesome'
                        color='#E31D1A'
                    />
                    <View style={styles.h1Container}>
                        <Text style={styles.h1}>Stena Bulk</Text>
                    </View>
                    <Text style={styles.welcomeText}>WELCOME TO</Text>
                    <Text style={styles.SOPText}>STENA OPERATIONAL PLATFORM</Text>

                    <Image
                        source={require('../../assets/images/shipLogIn.png')}
                        style={styles.image}
                    />

                    <View style={{
                        position: this.state.inputPosition,
                        width: '100%',
                        bottom: this.state.inputBottom
                    }}>
                        <Input placeholder="Username"/>
                        <Input placeholder="Password"/>
                    </View>

                    <LoginBtn/>

                    <View style={styles.footer}>
                        <View style={styles.footerSection}>
                            <Text style={styles.footerItemLeft}>Don't have an account?</Text>
                            <Text style={styles.footerItemLeft}>Please contact us.</Text>
                        </View>
                        <View style={styles.footerSection}>
                            <Text style={styles.footerItemRight}>Forgot password?</Text>
                            <Text style={styles.footerItemRight}>Please click here.</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1Container: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#AB2416',
        marginBottom: 30,
        marginTop: -15
    },
    h1: {
        fontSize: 32,
        color: '#FFFFFF',
        padding: 0,
        marginBottom: -7,
        fontWeight: '900',
        backgroundColor: 'transparent'
    },
    welcomeText: {
        color: '#FFFFFF',
        fontWeight: '100',
        backgroundColor: 'transparent'
    },
    SOPText: {
        maxWidth: '80%',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 12,
        backgroundColor: 'transparent'
    },
    image: {
        marginTop: 30,
        marginBottom: 30
    },
    footer: {
        width: '80%',
        flexDirection: 'row',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    footerSection: {
        width: '50%',
        justifyContent: 'space-between'
    },
    footerItemLeft: {
        color: '#FFFFFF',
        fontWeight: '100',
        textAlign: 'left',
        fontSize: 10,
        backgroundColor: 'transparent'
    },
    footerItemRight: {
        color: '#FFFFFF',
        fontWeight: '100',
        textAlign: 'right',
        fontSize: 10,
        backgroundColor: 'transparent'
    },
    gradient: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    }
});
