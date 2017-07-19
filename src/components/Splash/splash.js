import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';

class SplashComponent extends Component {

    go(){
        this.props.navigator.push({
            id: 'Login'
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.logoContainer }>
                    <TouchableHighlight onPress={ this.go.bind(this) }>
                        <Image style={ styles.logo } source={require('../../images/logo.png')} />
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={ styles.title }>powered by <Text style={ styles.subtitle }>SmartSolut</Text></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009999'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 180,
        height: 60
    },
    title: {
        paddingBottom: 20,
        textAlign: 'center',
        color: '#f5f5f5',
        flexGrow: 1,
        fontWeight: '300'

    },
    subtitle: {
        color: '#f5f5f5',
        fontWeight: '800'
    }
});

export default SplashComponent;