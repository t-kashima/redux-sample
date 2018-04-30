import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
    },
})

const ReviewComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>
    )
}

export default ReviewComponent;
