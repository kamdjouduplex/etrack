import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, ListView } from 'react-native';
import { Avatar } from 'react-native-material-design';

var productArray = [];

class Sessions extends Component {
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
            console.log(json);
            productArray = json;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(productArray),
                isLoading: false
            })
        }.bind(this));
    }

    getTheData(callback){
        var url = "https://raw.githubusercontent.com/kamdjouduplex/Documentations/master/sessions.json";
        fetch(url)
        .then(response => response.json())
        .then(json => callback(json))
        .catch(error => console.log(error));
    }

    renderRow (rowData, SectionID, rowID){
            return (
                <TouchableHighlight underlayColor="#dddddd" style={{ height: 64}} >
                    <View style={styles.detailBox}>
                        <View style={styles.box1}>
                            <Avatar icon="watch-later" backgroundColor="#f1c40f"/>
                        </View>
                        <View style={styles.box2}>
                            <Text numberOfLines={3}>
                                <Text style={{ fontSize:16, color: '#000000', fontWeight: "500"}}>{rowData.title} {'\n'}</Text>
                                <Text style={{ fontSize:12, color: '#002255', fontWeight: "200"}}> {rowData.day}</Text>
                                <Text style={{ fontSize:13, color: '#002255', fontWeight: "600"}}> From: </Text>
                                <Text style={{ fontSize:12, color: '#002255', fontWeight: "200"}}> {rowData.start}</Text>
                                <Text style={{ fontSize:13, color: '#002255', fontWeight: "600"}}> To:</Text>
                                <Text style={{ fontSize:12, color: '#002255', fontWeight: "200"}}> {rowData.end}</Text>
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
            <View>
                {currentView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Sessions;