import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import AcountScreen from "../screens/AcountScreen"
import ClientOrdersScreen from '../screens/ClientOrdersScreen'
import { Colors } from '../global/styles'
import {Icon} from "react-native-elements"


const BottomTab=createBottomTabNavigator()
export default function ClientTabs() {
  return (
   
      <BottomTab.Navigator
        tabBarOptions={{
             activeTintColor:Colors.secondColor,
             
            }}>

            <BottomTab.Screen
              name="Home"
              component={HomeScreen}
              options={
                  {tabBarLabel:"Home",
                  headerShown:false,
                  tabBarIcon:({color,size})=>(<Icon
                  name='home'
                  type='material'
                  color={color}
                  size={size}
               />)
                }}
            />

     <BottomTab.Screen
              name="Search"
              component={SearchScreen}
              options={
                 { tabBarLabel:"Search",
                 headerShown:false,
                 tabBarIcon:({color,size})=>(<Icon
                    name='search'
                    type='material'
                    color={color}
                    size={size}
                 />)
                
                
                }}
            />

<BottomTab.Screen
              name="Account"
              component={AcountScreen}
              options={
                 { tabBarLabel:"my Account",
                 headerShown:false,
                 tabBarIcon:({color,size})=>(<Icon
                    name='person'
                    type='material'
                    color={color}
                    size={size}
                 />)
                
                
                }}
            />

<BottomTab.Screen
              name="orders"
              component={ClientOrdersScreen}
              options={
                 { tabBarLabel:"orders",
                 headerShown:false,
                 tabBarIcon:({color,size})=>(<Icon
                    name='view-list'
                    type='material'
                    color={color}
                    size={size}
                 />)
                
                
                }}
            />

</BottomTab.Navigator> 
   
  )
}