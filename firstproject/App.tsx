/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {View, Text, Button, SafeAreaView} from 'react-native';

import Tourism from './components/Tourism';

let age = 22;
var email = 'abc@test.com';

const fruit = () => {
  return 'Apple';
};

function App() {
  let data = 100;
  const movement = () => {
    // problem without state
    data = 20;
    console.warn(data);
  };

  const [name, setName] = useState('Anmol'); // problem solved using state

  function testname() {
    setName('Sanket');
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 30}}>Hello world !</Text>
        <Text style={{fontSize: 20}}>This whole function is a component </Text>
        <Button
          title="On Press"
          onPress={() => movement()}
          color={'red'}></Button>
        <Text style={{fontSize: 20}}>{name} </Text>
        <Button title="Update Name" onPress={testname}></Button>
        <Text style={{fontSize: 20}}>{age} </Text>
        <Text style={{fontSize: 20}}>{email} </Text>
        <Text style={{fontSize: 20}}>{34 * 23} </Text>
        <Text style={{fontSize: 20}}>{fruit()} </Text>
        <CompanyData />
        <Button title="On Press" onPress={movement} color={'green'}></Button>
        <Tourism />
      </View>
    </SafeAreaView>
  );
}
const CompanyData = () => {
  // Reusable Independent component
  return (
    <View>
      <Text style={{fontSize: 20}}>Name:XYZ Company</Text>
      <Text style={{fontSize: 20}}>Total emp: 500</Text>
      <Text style={{fontSize: 20}}>Poduct:ABC product</Text>
    </View>
  );
};

export default App;
