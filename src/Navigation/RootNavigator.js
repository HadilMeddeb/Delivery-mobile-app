
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from "./Navigators"

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}