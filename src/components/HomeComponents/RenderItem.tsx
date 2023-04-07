import { View, Text, useWindowDimensions, StyleSheet, Pressable } from 'react-native'
import React, { FC, memo } from 'react'
import { QuoteTypes } from '../../types/types'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../router/Router';

type AppProps= {
    item : QuoteTypes;
}


const RenderItem:FC<AppProps> = ({item}):JSX.Element => {

    const {height,width} = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<StackParams,'Home'>>();


  return (
    <Pressable onPress={()=>navigation.navigate('Details',{item:item})}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    parent:{
        height: 300,
        margin:45,
    }
})

export default memo(RenderItem);