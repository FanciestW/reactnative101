import React from 'react';
import { View, Image } from 'react-native';

import { Text, TextProps } from './Themed';

export default function ListItem(props: object) {
    return (
        <View>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 50, height: 50 }} />
            <Text>This is a cat</Text>
        </View>
    ) 
}