import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/authScreens/SignInScreen'
import SignUp from '../screens/authScreens/SignUpScreen'
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import MapScreen from "../screens/MapScreen"
import ClientTabs from "./ClientTabs"
import RestaurantDetails from "../screens/RestaurantDetails"
const Stack = createNativeStackNavigator();
export default function Navigator() 
{
  return(
        <Stack.Navigator  >


        <Stack.Screen name="Welcome" component={WelcomeScreen} 
        options={{headerShown:false }}/>


        <Stack.Screen name="SignIn" component={SignIn} 
         options={{headerShown:false}} />


        <Stack.Screen name="SignUp" component={SignUp} 
         options={{headerShown:false}} />


        <Stack.Screen name="ClientTabs" component={ClientTabs} 
         options={{headerShown:false}} />


        <Stack.Screen name="MapScreen" component={MapScreen} 
         options={{headerShown:false}} />

        
       <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} 
         options={{headerShown:false}} />
          

        </Stack.Navigator>

)}
