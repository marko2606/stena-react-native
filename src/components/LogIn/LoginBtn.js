import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './LogInStyle';

const LoginBtn = () => {
        return (
            <TouchableOpacity
                style={styles.logInButton}
            >
                <View style={styles.logInButtonView}>
                    <Text style={styles.logInButtonText}>LOGIN</Text>
                </View>
            </TouchableOpacity>
        )
};

export default LoginBtn;