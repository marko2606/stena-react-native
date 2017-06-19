import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './LogInStyle';

const Input = (props) => {
    const { placeholder, secureTextEntry, onChange} = props;
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            underlineColorAndroid='transparent'
            secureTextEntry={secureTextEntry}
            onChange={onChange}
        />
    );
};

export default Input;