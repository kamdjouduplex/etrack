import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, KeyboardAvoidingView, StatusBar } from 'react-native';

import Form from './loginForm';

class LoginComponent extends Component {

    goSplash(){
        this.props.navigator.push({
            id: 'Welcome'
        });
    }

    goToHome(){
        this.props.navigator.push({
            id: 'Welcome'
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={ styles.container }>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
                    <TouchableHighlight style={ styles.box } onPress={this.goSplash.bind(this)} >
                        <Image style={ styles.logo } source={require('../../images/logo.png')} />
                    </TouchableHighlight>
               </View>
               <View >
                    <Form />
                    <View style={styles.footer}>
                        <Text style={ styles.title }>powered by <Text style={ styles.subtitle }>SmartSolut</Text></Text>
                    </View>
               </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009999',
        paddingTop: 80
    },
    box: {
        width: 250,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 60,
        width: 200,
        resizeMode: 'contain'
    },

    title: {
        paddingTop: 150,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#f5f5f5',
        fontWeight: '300'

    },
    subtitle: {
        color: '#f5f5f5',
        fontWeight: '800'
    }
});

export default LoginComponent;