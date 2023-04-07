import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackParams } from '../router/Router';

const Details = ():JSX.Element => {

  const {params:{item}} = useRoute<RouteProp<StackParams,'Details'>>();



  return (
    <SafeAreaView style={styles.parent}>
      <Text style={styles.idStyle}>{'#     '+item.id}</Text>
      <Text style={styles.titleStyle}>{item.title}</Text>
      <Text style={styles.bodyStyle}>{item.body}</Text>

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
})

export default Details