import { View, Text } from 'react-native'
import React, { FC, memo } from 'react'
import { QuoteTypes } from '../../types/types'

type AppProps= {
    item : QuoteTypes;
}


const RenderItem:FC<AppProps> = ({item}):JSX.Element => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  )
}

export default memo(RenderItem)