import react, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [listItems, setListItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (text) {
      setListItems([...listItems, text]);
      setText('');
    }
  };

  const renderItem = ({item}: {item: string}) => {
    return <Text>{item}</Text>;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text here"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text>Add to list</Text>
      </TouchableOpacity>
      <FlatList data={listItems} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    fontColor: 'black',
    borderColor: 'black',
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'cyan',
    fontColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
