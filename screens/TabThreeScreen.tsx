import React, { useState } from 'react';
import { StyleSheet, FlatList, Button, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView } from '../components/Themed';
import ListItem from '../components/ListItem';

export default function TabThreeScreen() {
  const [data, setData] = useState([{ key: 'One' }, { key: 'Two' }, { key: 'Three' }]);
  const [textBoxValue, setTextBoxValue] = useState('');

  const deleteFunc = (key: string) => {
    const newData = data.filter((obj) => {
      return obj.key !== key;
    });
    setData(newData);
  };

  const addToListFunc = (key: string) => {
    setData([...data, { key }]);
    setTextBoxValue('');
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem deleteFunc={deleteFunc} textContent={item.key} itemKey={item.key} />}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            borderColor: 'white',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          value={textBoxValue}
          onChangeText={(text: string) => setTextBoxValue(text)}
          placeholder='New Cat Name'
        />
        <Button title='Add' onPress={() => addToListFunc(textBoxValue)} />
      </View>
    </>
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Tab Two</Text>
    //     <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
    //     <EditScreenInfo path='/screens/TabTwoScreen.tsx' />
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
