import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './LogInStyle';

const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            underlineColorAndroid='transparent'
        />
    );
};

export default Input;