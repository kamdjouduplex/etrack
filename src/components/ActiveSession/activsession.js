import React, { Component } from 'react';
import NavigationBar from 'react-native-navigation-bar';
import { Icon, Avatar } from 'react-native-material-design';
import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity, ListView } from 'react-native';

function onBackHandle(){
        goHome();
    }

var productArray = [];

class ActiveSessionComponent extends Component {

    constructor(props){
            super(props);
            var dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1.guid != r2.guid});
            this.state = {
                dataSource: dataSource.cloneWithRows(productArray),
                isLoading: true
            }
    }

    componentDidMount() {
        this.getTheData (function(json){
            console.log(json.data);
            productArray = json.data;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(productArray),
                isLoading: false
            })
        }.bind(this));
    }
    getTheData(callback){
        var url = "http://192.168.1.3/etrack/public/sessions";
        fetch(url)
        .then(response => response.json())
        .then(json => callback(json))
        .catch(error => console.log(error));
    }

    goHome(){
        this.props.navigator.push({
            id: 'Home'
        });
    }

    renderRow (rowData, SectionID, rowID){
            return (
                <TouchableHighlight underlayColor="#dddddd" style={{ height: 64}} >
                    <View style={styles.detailBox}>
                        <View style={styles.box1}>
                            <Avatar icon="access-time" backgroundColor="#1abc9c"/>
                        </View>
                        <View style={styles.box2}>
                            <Text numberOfLines={3}>
                                <Text style={{ fontSize:16, color: '#000000', fontWeight: "600"}}>{rowData.code} {'\n'}</Text>
                                <Text style={{ fontSize:16, color: '#000000', fontWeight: "700"}}>{rowData.title} {'\n'}</Text>
                                <Text style={{ fontSize:14, color: '#000000', fontWeight: "700"}}>form </Text>
                                <Text style={{ fontSize:12, color: '#002255', fontWeight: "200"}}> {rowData.starting_time}</Text>
                                <Text style={{ fontSize:14, color: '#000000', fontWeight: "700"}}> to </Text>
                                <Text style={{ fontSize:12, color: '#000000', fontWeight: "200"}}>{rowData.ending_time}</Text>
                            </Text>
                            <View style={{height: 2, backgroundColor: '#dddddd'}}/>
                        </View>
                    </View>
                </TouchableHighlight>
            );
    }

    render() {
        var currentView = (this.state.isLoading)?<View />:<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}></ListView>;
        return (
            <View style={ styles.container }>
                <NavigationBar 
                    title={'Tap the session'}
                    height={50}
                    titleColor={'#fff'}
                    backgroundColor={'#009999'}
                    leftButtonTitle={'◀ Back'}
                    leftButtonTitleColor={'#fff'}
                    onLeftButtonPress={onBackHandle}
                />
                {currentView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 55,
        paddingLeft: 5,
        paddingRight: 5,
    },
    box1: {
        flex:1,
    },
    box2: {
        flex:4,
    },
    detailBox: {
        flexDirection: 'row'
    }
});

export default ActiveSessionComponent;