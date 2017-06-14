import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from './LogInStyle';

const LoginBtn = () => {
        return (
            <TouchableOpacity
                style={styles.logInButton}
                onPress={() => Actions.main() }
            >
                <View style={styles.logInButtonView}>
                    <Text style={styles.logInButtonText}>LOGIN</Text>
                </View>
            </TouchableOpacity>
        )
};

export default LoginBtn;