import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import BookContainer from './app/containers/BookContainer';
import DetailContainer from './app/containers/DetailContainer';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="book" component={BookContainer} title="Chuck Norris" initial={true} />
      <Scene key="search" component={DetailContainer} title="Search" />
    </Stack>
  </Router>
);

export default App;
