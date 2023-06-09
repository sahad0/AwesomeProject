import { View, Text } from 'react-native'
import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Router from './src/router/Router';
import storeReducer from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
    store:storeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
      cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




const App = () => {
  return (

    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
    </Provider>
  )
}

export default App