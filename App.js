import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TwitterLogin from './components/Login'
import OAuthManager from 'react-native-oauth';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TwitterLogin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25CCF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
