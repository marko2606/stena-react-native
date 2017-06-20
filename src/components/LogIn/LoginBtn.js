import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './LogInStyle';

const LoginBtn = (props) => {
    const {logInButton, logInButtonView, logInButtonText} = styles;

    return (
        <TouchableOpacity
            style={logInButton}
            onPress={props.onPress}
        >
            <View style={logInButtonView}>
                <Text style={logInButtonText}>LOGIN</Text>
            </View>
        </TouchableOpacity>
    )
};

export default LoginBtn;