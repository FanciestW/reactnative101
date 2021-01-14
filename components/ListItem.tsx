import React from 'react';
import { View, Image, Button } from 'react-native';

import { Text, TextProps } from './Themed';

export default function ListItem(props: IListItemProp) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 50, height: 50 }} />
      <Text>{props.textContent}</Text>
      <Button title='Delete' onPress={() => props.deleteFunc(props.itemKey)} />
    </View>
  );
}

interface IListItemProp {
  deleteFunc: (key: string) => void;
  itemKey: string;
  textContent: string;
  imageUri?: string;
}
