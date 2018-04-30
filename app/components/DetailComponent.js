import React, { Component } from 'react'
import { TextInput, Image, View, Text, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { searchItem } from '../actions/SearchAction';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    imageLayout: {
        width: 30,
        height: 30,
        marginRight: 8,
        resizeMode: Image.resizeMode.contain,
    },
    titleLayout: {
        margin: 16,
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    textLayout: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInputLayout: {
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16,
        margin: 16
    },
    rowLayout: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,        
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
    }
});

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class DetailComponent extends Component {
    componentWillMount() {
        
    }

    _searchItem = (query) => {
        if (query.length < 3) {
            return
        }
        this.props.searchItem(query)
    }

    _listRow = (item) => {
        return (
            <View style={styles.rowLayout}>
                <Image source={{uri: item.icon_url}} 
                        style={styles.imageLayout} />            
                <Text>{item.value}</Text>
            </View>
        )
    }

    render() {
        const { total, result } = this.props
        console.log("id: " + this.props.id)
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputLayout}
                    onEndEditing={(event) => this._searchItem(event.nativeEvent.text)} />
                <Text style={styles.titleLayout}>
                    Result: {total}
                </Text>
                <ListView
                    style={styles.listLayout}
                    enableEmptySections
                    dataSource={dataSource.cloneWithRows(result)}
                    renderRow={this._listRow} />
            </View>
        )
    }
}

export default connect(
    state => ({
        total: state.total,
        result: state.result,
    }),
    dispatch => ({
        searchItem: (id) => dispatch(searchItem(id))
    })
)(DetailComponent);
