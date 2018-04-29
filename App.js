import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Book from './app/components/BookComponent'

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="book" component={Book} initial={true} />
    </Scene>
  </Router>
);

export default App;
