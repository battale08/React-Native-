import {Text, View} from 'react-native';
const Tourism = () => {
  // Reusable Independent component
  return (
    <View>
      <Text style={{fontSize: 20}}>Place:Kasol Himachal</Text>
      <Text style={{fontSize: 20}}>Pacakge: 2000</Text>
      <Text style={{fontSize: 20}}>Days: 4</Text>
    </View>
  );
};
export default Tourism;

// Nested component also possible in React native
// Header section is the best example of reusable component

// React native internally used React Js that is why all the features of react js
// available in react native

// A particular "state" data of a compnonent is remain in that particular component only
// not shared with any other component but we can do so otherwise with using "Props"
// i.e we can transfer data from one component to other other component

// whenever a state or props gets update our component gets Rerender in both case but when a variable
// gets update then in that case component is not Rerender.
