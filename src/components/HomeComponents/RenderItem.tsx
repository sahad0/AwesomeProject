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
    <Pressable style={styles.parent} onPress={()=>navigation.navigate('Details',{item:item})}>
            <Text style={styles.textStyle}>{ item.title }</Text>
            <Text style={styles.textStyle1}>{item.body}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    parent:{
        
        margin:25,
        elevation:5,
       
        
    },
    textStyle:{
        fontSize:25,
        color:'black',
        fontWeight:'600'
    },
    textStyle1:{
        fontSize:15,
        color:'gray',
    }
})

export default memo(RenderItem,(prev,next)=>prev.item.id===next.item.id);