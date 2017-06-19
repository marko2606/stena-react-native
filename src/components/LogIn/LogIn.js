import React from 'react';
import { View, Image, Keyboard, LayoutAnimation, Platform, UIManager, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { tryLoginAction } from './LoginActions';

import { Gradient } from '../../shared/';
import Input from './Input';
import Footer from './Footer';
import LoginBtn from './LoginBtn';
import Header from './Header';
import { styles } from './LogInStyle';
import { colors } from '../../Colors';

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputPosition: 'relative',
            inputBottom: 0,
            screenWidth: Dimensions.get('screen').width,
            SOPFontSize: 0,
            username: '',
            password: ''
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillMount() {
        const toSetProperFontSize = 20.5;
        LayoutAnimation.spring();
        this.setState({SOPFontSize: this.state.screenWidth / toSetProperFontSize});
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
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
        this.setState({
            inputPosition: 'relative',
            inputBottom: 0
        });
    }

    handleUsernameChanged(event) {
        this.setState({
            username: event.nativeEvent.text
        })
    }

    handlePasswordChanged(event) {
        this.setState({
            password: event.nativeEvent.text
        })
    }

    loginUser() {
        const user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.tryLogin(user);
    }

    render() {
        return (
            <Gradient
                colors={[colors['gradientPrimaryColor1'], colors['gradientPrimaryColor2'], colors['gradientPrimaryColor3']]}
                style={styles.gradient}
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
            >
                <View style={styles.container}>
                    <Header SOPFontSize={this.state.SOPFontSize}/>
                    <Image
                        resizeMode={'contain'}
                        source={require('../../assets/images/vessels-management-vessel.png')}
                        style={styles.image}
                    />
                    <View style={{
                        position: this.state.inputPosition,
                        width: '100%',
                        bottom: this.state.inputBottom
                    }}>
                        <Input
                            placeholder="Username"
                            onChange={this.handleUsernameChanged.bind(this)}
                        />
                        <Input
                            placeholder="Password"
                            onChange={this.handlePasswordChanged.bind(this)}
                            secureTextEntry={true}
                        />
                    </View>
                    <LoginBtn onPress={this.loginUser.bind(this)}/>
                    <Footer/>
                </View>
            </Gradient>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.loginReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        tryLogin: (user) => {
            tryLoginAction(dispatch, user);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
