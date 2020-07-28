
import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.def}>
            <Image style={{width: "30%", height: "30%", resizeMode: 'contain', borderRadius:100 }} source={require('./icon/logo.png')}/>
            <Text style={{marginTop: 15}}> A meeting to give opportunities & support to those </Text>
            <Text>who want to express their talents</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={{marginRight: 41}}>P. 010-2075-5984</Text>
            <Text style={{marginRight: 50, lineHeight: 30}}>T. 031-797-2224</Text>
            <Text style={{marginRight: 50}}>F. 031-797-7224</Text>
            <Text style={{marginRight: 16, lineHeight: 30}}>E. wave-0@naver.com</Text>
            <Text>A. 경기도 광주시 곤지암읍</Text>
            <Text style={{marginRight: 43}}>경충대로 754</Text>
            <Text style={{marginLeft: 19}}>예선빌딩 3층(우) 12800</Text>
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
  def: {
    marginTop: 100,
    alignItems: 'center'
  },
  infoBox: {
    width: 270,
    height: 200,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontWeight: 'bold',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  }
});
