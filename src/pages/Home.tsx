import { View, Text, SafeAreaView, StyleSheet, FlatList, ListRenderItem, useWindowDimensions } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { QuoteTypes } from '../types/types';
import requestStatus, { initial_state } from '../utils/LoadingHandler';
import RenderItem from '../components/HomeComponents/RenderItem';

const Home = () => {

    const [quote,setQuote] = useState<QuoteTypes[]>([]);
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const {height,width} = useWindowDimensions();

    useEffect(()=>{
        DummyFetcher();
    });


    const DummyFetcher = async():Promise<void>=>{
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setQuote(data);

        } catch (error) {
            
        }
    }

    const keyExtractor = (item:QuoteTypes):string => item.id.toString();
    const renderItem:ListRenderItem<QuoteTypes> = ({item})=> <RenderItem item={item} />



  return (
    <SafeAreaView style={style.container}>
            <View style={{height:height*0.1,backgroundColor:'lightgreen',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:25,}}>Dummy Fetcher</Text>
            </View>
            <FlatList data={quote} renderItem={renderItem} keyExtractor={keyExtractor} />

    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Home