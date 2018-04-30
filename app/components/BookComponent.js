import React, { Component } from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux';
import { addDate, clearDate } from '../actions';
import { fetchChuckNorrisMessage } from '../actions/BookAction'
import ReviewComponent from './ReviewComponent';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    imageLayout: {
        margin: 10,
        width: 80,
        height: 80,
        resizeMode: Image.resizeMode.contain,
    },
    titleLayout: {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    textLayout: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

class BookComponent extends Component {
    componentWillMount() {
        this.props.fetch();
    }

    _onClickSearch = () => {
        Actions.search({id: this.props.item.id})
    }

    render() {
        const { item, add, clear, fetch } = this.props;
        console.log("render")
        return (
            <View style={styles.container}>
                <Text style={styles.titleLayout}>
                    Today's Chuck Norris
                </Text>
                <TouchableOpacity onPress={() => fetch()}>
                    <Image source={{uri: item.icon_url}} 
                            style={styles.imageLayout} />
                </TouchableOpacity>
                <Text style={styles.textLayout}>
                    {item.message}
                </Text>
                <Button onPress={() => this._onClickSearch()} title="Search" />
            </View>
        )
    }
}

// BookComponent.propTypes = propTypes;
// export default BookComponent;

export default connect(
    state => ({
        item: state.item,
    }),
    dispatch => ({
        add: () => dispatch(addDate()),
        clear: () => dispatch(clearDate()),
        fetch: () => dispatch(fetchChuckNorrisMessage()),
    })
)(BookComponent); 
