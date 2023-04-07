import { View, Text, SafeAreaView, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackParams } from '../router/Router';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { addController, removeController } from '../store/store';

const Details = ():JSX.Element => {

  const {params:{item},path} = useRoute<RouteProp<StackParams,'Details'>>();
  const {addedItems} = useAppSelector((state)=>state.cart.store.value)
  const dispatch = useAppDispatch();


  return (
    <SafeAreaView style={styles.parent}>
      <Text style={styles.idStyle}>{'#     '+item.id}</Text>
      <Text style={styles.titleStyle}>{item.title}</Text>
      <Text style={styles.bodyStyle}>{item.body}</Text>

    {
      addedItems.includes(item.id)===true ?
      <>
        <TouchableOpacity onPress={()=>dispatch(removeController({message:item.id}))} style={styles.btn}>
          <Text style={styles.addStyle}>{ "Remove Item" }</Text>
        </TouchableOpacity>
      </>
      :
      <>
      <TouchableOpacity onPress={()=>dispatch(addController({message:item}))} style={styles.btn}>
         <Text style={styles.addStyle}>{ "Add Item" }</Text>
      </TouchableOpacity>
      </>
    }


      
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  parent:{
    flex:1
  },
  idStyle:{
    fontSize:25,
    color:'black',
    margin:30
  },
  titleStyle:{
    margin:25,
    fontSize:25,
    color:'black',
    fontWeight:'600'
  },
  bodyStyle:{
    fontSize:15,
    color:'gray',
    margin:25
    
  }
  ,btn:{
    position:'absolute',
    top:'90%',
    left:'45%',
  },
  addStyle:{
    fontSize:15,fontWeight:'800',color:'lightgreen'
  }
})

export default Details