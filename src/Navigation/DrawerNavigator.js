import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientTabs from "./ClientTabs"
import { Colors } from '../global/styles';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen 
                name="ClientTabs"
                component={ClientTabs}
                options={{
                  title:'Client',
                  drawerIcon: ({focussed,size})=>(
                    <Icon
                      type="material-community"
                      name="home"
                      color={focussed? Colors.secondColor:Colors.gray}
                      size={size}
                    />
                  )
                }}
      
      
      />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}