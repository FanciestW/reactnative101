import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <FlatList
      data={[{key: 'One'}, {key: 'Two'}, {key: 'Three'}]}
      renderItem={({item}) => <Text style={styles.flatListItem}>{item.key}</Text> }
    />
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
    height: 44
  }
});
