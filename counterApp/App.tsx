/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);

  return (
    <View style={dstyle.bg}>
      <Text style={dstyle.showtext}>{counter}</Text>
      <View style={dstyle.btn}>
        <Button
          color={'Purple'}
          title="+10"
          onPress={() => setCounter(counter + 10)}></Button>
      </View>
      <View style={dstyle.btn}>
        <Button
          color={'green'}
          title="Reset"
          onPress={() => setCounter(0)}></Button>
      </View>
      <View style={dstyle.btn}>
        <Button
          color={'red'}
          title="-10"
          onPress={() => {
            counter ? setCounter(counter - 10) : setCounter(0);
          }}></Button>
      </View>
    </View>
  );
}
const dstyle = StyleSheet.create({
  showtext: {
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 100,
    paddingHorizontal: 40,
    borderRadius: 30,
    position: 'relative',
    fontSize: 80,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 5,
  },
  bg: {
    backgroundColor: 'cyan',
    textAlign: 'center',
    height: 1000,
    textAlignVertical: 'center',
  },
  btn: {
    marginBottom: 15,
    paddingHorizontal: 30,
  },
});

export default App;
