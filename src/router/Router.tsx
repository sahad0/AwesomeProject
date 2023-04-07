import { NavigationContainer } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import axios from 'axios';

import { Platform } from 'react-native';
import { useEffect, } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Details from '../pages/Details';
import { QuoteTypes } from '../types/types';
import Bookmarks from '../pages/Bookmarks';



export type StackParams = {
   Home:undefined,
   Details:{
    item:QuoteTypes,
   },
   Bookmarks:undefined,
}



export default function Router():JSX.Element {


  


    const Stack = createNativeStackNavigator<StackParams>(); 



  







  return (
    <NavigationContainer >
        <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='Home'>
            
            <Stack.Screen  options={{animation:'slide_from_right'}} name='Home' component={Home} />
            <Stack.Screen  options={{animation:'slide_from_right'}} name='Details' component={Details} />
            <Stack.Screen  options={{animation:'slide_from_right'}} name='Bookmarks' component={Bookmarks} />


        
        </Stack.Navigator>
    </NavigationContainer>
  );
}




