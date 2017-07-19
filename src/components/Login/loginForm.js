import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';

class LoginForm extends Component {

    goToHome(){
        this.props.navigator.push({
            id: 'Welcome'
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <TextInput 
                    style={ styles.input}
                    placeholder="Matricule Number"
                    returnKeyType="next"
                    underlineColorAndroid="rgba(255, 255, 255, 0.0)"
                    placeholderTextColor="#ccc"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <TextInput 
                    style={ styles.input}
                    placeholder="Password"
                    returnKeyType="go"
                    underlineColorAndroid="rgba(255, 255, 255, 0.5)"
                    placeholderTextColor="#ccc"
                    ref={(input) => this.passwordInput = input}
                    secureTextEntry
                 />
                <TouchableOpacity style={ styles.buttoncontainer }>
                    <Text style={ styles.buttontext } >LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    input: {
        height: 45,
        backgroundColor: '#fff',
        color: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttoncontainer: {
        backgroundColor: '#bdc3c7',
        paddingVertical: 9
    },
    buttontext:{
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 20,
        color: '#009999'
    }
});

export default LoginForm;