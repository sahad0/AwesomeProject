import { View, Text, useWindowDimensions, FlatList, ListRenderItem, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAppSelector } from '../Hooks/hooks'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuoteTypes } from '../types/types'
import RenderItem from '../components/HomeComponents/RenderItem'

const Bookmarks = () => {

    const {Quotes} = useAppSelector(state => state.cart.store.value);
    const {height,width} = useWindowDimensions();

    const keyExtractor = (item:QuoteTypes):string => item.body+'xpdemrgcy';
    const renderItem:ListRenderItem<QuoteTypes> = ({item})=> <RenderItem item={item} />

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:height*0.1,backgroundColor:'lightgreen',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:25,}}>Bookmarks</Text>
            </View>
            <FlatList keyExtractor={keyExtractor} initialNumToRender={5} scrollEventThrottle={16} ListEmptyComponent={()=><ActivityIndicator size={'large'} />} data={Quotes} renderItem={renderItem}  />

    </SafeAreaView>
  )
}

export default Bookmarks