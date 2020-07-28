/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        focusId: false,
        focusPw: false
    };
  }

  focusId = () => {
    this.setState({ focusId: true});
  }
  focusPw = () => {
      this.setState({ focusPw: true });
    }
  unfocusedId = () => {
    this.setState({ focusId: false });
  }
  unfocusedPw = () => {
      this.setState({ focusPw: false});
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          </View>
          <View style={styles.logo}>
            <Image style={{width: "45%", height: "45%", resizeMode: 'contain', borderRadius:100 }} source={require('./icon/logo.png')}/>
          </View>
          <View style={styles.login}>
            <TextInput placeholder='ID' onFocus={this.focusId} onBlur={this.unfocusedId} style={this.state.focusId ? styles.idp : styles.id} />
            <TextInput placeholder='PASSWORD' secureTextEntry={true} onFocus={this.focusPw} onBlur={this.unfocusedPw} style={this.state.focusPw ? styles.pwp : styles.pw} />
            <TouchableOpacity style={styles.login_bt}>
              <ImageBackground source={require('./icon/background.jpg')} imageStyle={{borderRadius: 30}} style={styles.bgImage}>
                <Text style={styles.login_char}>로그인</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={{color: 'gray', marginTop: 28, marginRight: 35, alignSelf: 'flex-end', fontWeight:'bold'}}>CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'gray', marginTop: -18, marginLeft: 35, alignSelf: 'flex-start', fontWeight: 'bold'}}>회원가입</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 0.3
  },
  logo: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {
    flex: 2,
    alignItems: 'center'
  },
  footer: {
    flex: 0.7,
  },
  id: {
    marginTop: 20,
    width: 270,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: 'lightgray',
    paddingLeft: 15
  },
  idp: {
      marginTop: 20,
      width: 270,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      borderWidth: 2.5,
      borderColor: '#40e0d0',
      paddingLeft: 15
    },
  pw: {
    marginTop: 5,
    width: 270,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: 'lightgray',
    paddingLeft: 15
  },
  pwp: {
      marginTop: 5,
      width: 270,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      borderWidth: 2.5,
      borderColor: '#40e0d0',
      paddingLeft: 15
    },
  login_bt: {
    marginTop: 30,
    width: 270,
    height: 40
  },
  bgImage: {
    justifyContent: 'center',
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  login_char: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold',
  }
});
