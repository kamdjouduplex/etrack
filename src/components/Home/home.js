/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Icon } from 'react-native-material-design';
import Messages from '../Message/messages';
import Sessions from '../Session/sessions';
import Statistique from '../Statistique/statistique';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#009999',
    height: 50
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },

  icon:{
      padding: 5,
      fontWeight: 'bold'
  },
  box: {
    width: 160,
    height: 210,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#009999',
    alignItems: 'center',
    justifyContent: 'center'
  },
  taptext:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(0,0,0,.5)'
  },
  title:{
    marginBottom: 35,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,.5)'
  },
  btitle:{
    color: '#009999'
  }
});

export default class HomeComponent extends Component {

  static title = 'Icon only top bar';
  static appbarElevation = 0;

  static propTypes = {
    style: View.propTypes.style,
  };

  goActiv(){
        this.props.navigator.push({
            id: 'ActiveSession'
        });
    }

  state = {
    index: 0,
    routes: [
      { key: '1', icon: 'done' },
      { key: '2', icon: 'email' },
      { key: '3', icon: 'alarm' },
      { key: '4', icon: 'track-changes' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _renderIcon = ({ route }) => {
    return (
      <Icon        
        name={route.icon}
        size={32}
        color='#fff'
      />
    );
  };

  _renderHeader = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        renderIcon={this._renderIcon}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#fff' } ]} >
                <Text style={styles.title}>Welcome<Text style={styles.btitle}> Tony</Text></Text>
                <TouchableOpacity onPress={this.goActiv.bind(this)} style={styles.box}>
                  <Icon name="touch-app" size={100} color="rgba(255,0,0,.3)" />
                </TouchableOpacity>
                <Text style={styles.taptext}>tap to attend the session</Text>
            </View>;
    case '2':
      return <View style={{paddingTop:10, paddingLeft: 10, paddingRight: 10}}>
                  <Messages/>
            </View>;
    case '3':
      return <View style={{paddingTop:10, paddingLeft: 10, paddingRight: 10}} >
                <Sessions/>
            </View>;
    case '4':
      return <View style={{ paddingTop:10, paddingLeft: 10, paddingRight: 10 }} >
                <Statistique/>
            </View>;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}