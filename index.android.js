/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator, 
  TouchableHighlight
} from 'react-native';

import Splash from './src/components/Splash/splash';
import Login from './src/components/Login/login';
import Welcome from './src/components/Welcome/welcome';
import Home from './src/components/Home/home';
import ActiveSession from './src/components/ActiveSession/activsession';
import SideMenu from 'react-native-side-menu';
 

class Menu extends Component {
  render() {
    return (
      <View >
        <Text>
          Menu
        </Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    const menu = <Menu navigator={navigator}/>; 
    return (
      <SideMenu menu={menu}>
        <Navigator
          initialRoute = {{ id: 'Login'}}
          renderScene  = { this.navigatorRenderScene }
        />
      </SideMenu>
    );
  }

  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Splash':
      return (<Splash navigator={navigator} title='Splash' />);
      case 'Login':
      return (<Login navigator={navigator} title='Login' />);
      case 'Welcome':
      return (<Welcome navigator={navigator} title='Welcome' />);
      case 'Home':
      return (<Home navigator={navigator} title='Home' />);
      case 'ActiveSession':
      return (<ActiveSession navigator={navigator} title='ActiveSession' />);

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009999',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('App', () => App);
