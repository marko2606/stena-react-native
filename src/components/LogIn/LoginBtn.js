import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native'

export default class LoginBtn extends React.Component {
    LoginAttempt() {
        console.log('Login Attempt')
    }
    render() {
        return (
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 38,
                    borderWidth: 1,
                    borderColor: '#1DA68A',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={this.LoginAttempt.bind(this)}
            >
                <View style={{
                    backgroundColor: '#1DA68A',
                    width: '99%',
                    height: '90%',
                    justifyContent: 'center'
                }}
                >
                    <Text style={{textAlign: 'center', color: '#FFFFFF'}}>LOGIN</Text>
                </View>
            </TouchableOpacity>
        )
    }
}