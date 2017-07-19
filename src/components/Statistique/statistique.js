import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Hr from '../Libs/hr.dist';
import { Icon } from 'react-native-material-design';


class Statistique extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <View >
                    <Text style={ styles.title } >- Statistiques -</Text>
                </View>
                <Hr lineStyle={{
                        backgroundColor: "#009999",
                        height: 2,
                        flexGrow: 1,
                        marginBottom: 30,
                        marginTop: 10
                    }}/>
                <View >
                    <Icon name="forward-30" size={150} color="#009999" />
                </View>
                <Hr lineStyle={{
                        backgroundColor: "#009999",
                        height: 2,
                        flexGrow: 1,
                        marginBottom: 10
                    }}/>
                <View >
                    <Text style={ styles.sessiontext } > 15 Sessions in total</Text>
                </View>
                <Hr lineStyle={{
                        backgroundColor: "#009999",
                        height: 2,
                        flexGrow: 1,
                        marginTop: 10,
                        marginBottom: 10
                    }}/>
                <View >
                    <Text style={ styles.text }><Icon name="fiber-manual-record" size={30} color="rgba(46, 204, 113,1.0)" /> 6 Sessions attended</Text>
                    <Text style={ styles.text }><Icon name="fiber-manual-record" size={30} color="rgba(52, 152, 219,1.0)" /> 3 Sessions on time</Text>
                    <Text style={ styles.text }><Icon name="fiber-manual-record" size={30} color="rgba(231, 76, 60,1.0)" /> 3 Sessions not attended</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        textAlign: 'center',
        color: '#009999',
        opacity: 0.9,        
        fontWeight: '900',
        fontSize: 35
    },
    middletext:{
        marginBottom: 20,
        marginTop: 20
    },
    text: {
        color: '#222222',
        fontSize: 20
    },
    sessiontext: {
        textAlign: 'center',
        color: '#34495e',
        fontWeight: '700',
        fontSize: 25
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

export default Statistique;