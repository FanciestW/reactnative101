import React from 'react';
import { View, Image } from 'react-native';

import { Text, TextProps } from './Themed';

export default function ListItem(props: any) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 50, height: 50 }} />
            <Text>{props.textContent}</Text>
        </View>
    ) 
}