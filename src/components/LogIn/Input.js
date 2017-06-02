import React from 'react';
import {TextInput, StyleSheet, View, KeyboardAvoidingView} from 'react-native';


export default class Input extends React.Component {

    inputOnFocus() {
        console.log('input selected!')
    }

    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                underlineColorAndroid='transparent'
                onFocus={this.inputOnFocus.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        height: 40,
        width: '80%',
        textAlign: 'center',
        fontWeight: "100",
        borderWidth: 0.5,
        borderColor: 'rgba(29, 166, 138, .5)',
        marginBottom: 10,
        backgroundColor: '#0C252E',
    }
});