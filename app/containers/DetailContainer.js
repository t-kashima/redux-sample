import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import DetailComponent from '../components/DetailComponent';
import { store } from '../stores/SearchStore';

class DetailContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <DetailComponent id={this.props.id} />
            </Provider>
        )
    }
}

export default DetailContainer;