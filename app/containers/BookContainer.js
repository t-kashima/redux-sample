import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import BookComponent from '../components/BookComponent';
import { store } from '../stores';

class BookContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <BookComponent />
            </Provider>
        )
    }
}

export default BookContainer;
