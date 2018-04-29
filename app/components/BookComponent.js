import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Button, ViewPropTypes } from 'react-native'

// const propTypes = {
//     name: PropTypes.string,
//     sceneStyle: ViewPropTypes.style,
//     title: PropTypes.string,
// };

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
        console.log("render")
        return (
            <View style={styles.container}>
                <Text>
                    ABC
                </Text>
            </View>
        )
    }
}

// BookComponent.propTypes = propTypes;

export default BookComponent;
