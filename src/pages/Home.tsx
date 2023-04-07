import { View, Text, SafeAreaView, StyleSheet, FlatList, ListRenderItem, useWindowDimensions, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { QuoteTypes } from '../types/types';
import requestStatus, { initial_state } from '../utils/LoadingHandler';
import RenderItem from '../components/HomeComponents/RenderItem';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { setMessageController } from '../store/store';

const Home = () => {

    const [quote,setQuote] = useState<QuoteTypes[]>([]);
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const {height,width} = useWindowDimensions();
    const dispatch  = useAppDispatch();
    const {wecomeMessage} = useAppSelector((state)=> state.cart.store.value)

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

    const keyExtractor = (item:QuoteTypes):string => item.id.toString();
    const renderItem:ListRenderItem<QuoteTypes> = ({item})=> <RenderItem item={item} />



  return (
    <SafeAreaView style={style.container}>
            <View style={{height:height*0.1,backgroundColor:'lightgreen',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:25,}}>Dummy Fetcher</Text>
            </View>
            <FlatList ListEmptyComponent={()=><ActivityIndicator size={'large'} />} data={quote} renderItem={renderItem} keyExtractor={keyExtractor} />

    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Home