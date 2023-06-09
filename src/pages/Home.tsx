import { View, Text, SafeAreaView, StyleSheet, FlatList, ListRenderItem, useWindowDimensions, Alert, ActivityIndicator, Touchable, Pressable } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { QuoteTypes } from '../types/types';
import requestStatus, { initial_state } from '../utils/LoadingHandler';
import RenderItem from '../components/HomeComponents/RenderItem';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { setMessageController } from '../store/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../router/Router';

const Home = () => {

    const [quote,setQuote] = useState<QuoteTypes[]>([]);
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const {height,width} = useWindowDimensions();
    const dispatch  = useAppDispatch();
    const {wecomeMessage} = useAppSelector((state)=> state.cart.store.value);
    const navigation = useNavigation<NativeStackNavigationProp<StackParams,'Home'>>();

    useEffect(()=>{

        dispatch(setMessageController({message:"alert"}))
        DummyFetcher();
    });

    useEffect(()=>{
        if(wecomeMessage!==''){
            Alert.alert('Welcome to the meta.')
        }
    },[wecomeMessage]);


    const DummyFetcher = async():Promise<void>=>{
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setQuote(data);

        } catch (error) {
            Alert.alert('COntact the dev .Something is wrong')
        }
    }

    const keyExtractor = (item:QuoteTypes):string => item.id.toString()+'xpdemrgcy';
    const renderItem:ListRenderItem<QuoteTypes> = ({item})=> <RenderItem item={item} />



  return (
    <SafeAreaView style={style.container}>
            <Pressable onPress={()=>navigation.navigate('Bookmarks')} style={{height:height*0.1,backgroundColor:'lightgreen',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:17,}}>Go to Bookmarks</Text>

            </Pressable>
            <FlatList initialNumToRender={5} scrollEventThrottle={16} ListEmptyComponent={()=><ActivityIndicator size={'large'} />} data={quote} renderItem={renderItem} keyExtractor={keyExtractor} />

    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Home