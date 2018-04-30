import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ViewPropTypes } from 'react-native'
import { connect } from 'react-redux';
import { addDate, clearDate } from '../actions';
import { fetchChuckNorrisMessage } from '../actions/BookAction'
import ReviewComponent from './ReviewComponent';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    textLayout: {
        padding: 10,
    }
});

class BookComponent extends Component {
    render() {
        const { items, add, clear, fetch } = this.props;
        console.log("render")
        return (
            <View style={styles.container}>
                <Text>
                    {items}
                </Text>
                <ReviewComponent />
                <Button onPress={fetch} title="add" />
                <Button onPress={clear} title="clear" />
            </View>
        )
    }
}

// BookComponent.propTypes = propTypes;
// export default BookComponent;

export default connect(
    state => ({
        items: state.items,
    }),
    dispatch => ({
        add: () => dispatch(addDate()),
        clear: () => dispatch(clearDate()),
        fetch: () => dispatch(fetchChuckNorrisMessage()),
    })
)(BookComponent); 
