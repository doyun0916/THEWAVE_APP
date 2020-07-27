/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./icon/background.jpg')} style={styles.image}>
          <View style={styles.header}>
          </View>
          <View style={styles.logo}>
            <Image style={{width: "55%", height: "55%", resizeMode: 'contain', borderRadius:100 }} source={require('./icon/logo.png')}/>
          </View>
          <View style={styles.login}>
          </View>
          <View style={styles.footer}>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: 'stretch'
  },
  header: {
    flex: 0.7
  },
  logo: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {
    flex: 2,
  },
  footer: {
    flex: 0.7,
  }
});
