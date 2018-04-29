import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import BookContainer from './app/containers/BookContainer';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="book" component={BookContainer} initial={true} />
    </Scene>
  </Router>
);

export default App;
