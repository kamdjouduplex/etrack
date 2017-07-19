import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

class WelcomeComponent extends Component {

    goHome(){
        this.props.navigator.push({
            id: 'Home'
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <View >
                    <Text style={ styles.title } >-- welcome --</Text>
                    <Text style={ styles.nametext } >tony kamdjou</Text>
                </View>
                <View style={styles.middletext}>
                    <TouchableHighlight >
                        <Text style={ styles.text }>Congratulation! {"\n"} you successfully get into e-track. We hightly advive you to change your password before continue</Text>
                    </TouchableHighlight>
                </View>
                <View >
                    <TouchableOpacity onPress={this.goHome.bind(this)} style={ styles.buttoncontainer1 }>
                        <Text style={ styles.buttontext } >Changed Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.buttoncontainer2 }>
                        <Text style={ styles.buttontext } >Ask me later</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 20,
        paddingRight: 20
    },

    title: {
        textAlign: 'center',
        color: '#3498db',
        fontWeight: '700',
        fontSize: 35
    },
    middletext:{
        marginBottom: 20,
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        color: '#222222',
        fontWeight: '300',
        width: 210
    },
    nametext: {
        textAlign: 'center',
        color: '#34495e',
        flexGrow: 1,
        fontWeight: '500',
    },

    buttoncontainer1: {
        backgroundColor: '#009999',
        width: 300,
        paddingVertical: 9,
        marginBottom: 5
    },
    buttoncontainer2: {
        backgroundColor: '#bdc3c7',
        width: 300,
        paddingVertical: 9,
        marginBottom: 5
    },

    buttontext:{
        textAlign: 'center',
        fontWeight: "400",
        fontSize: 16,
        color: '#ecf0f1'
    }
});

export default WelcomeComponent;