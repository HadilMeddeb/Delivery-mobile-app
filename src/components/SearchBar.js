import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import { Colors, fontWeights } from '../global/styles'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SearchBar() {
  return (
<View  style={{paddingVertical:30}}>
<GooglePlacesAutocomplete
      query={{ key: "AIzaSyDuPcYpj8yiZ7uxpvUXLwkCl517jqR8tXM" }}
      placeholder='Search'
      styles={{
          textInput:{
               backgroundColor:"#eee",
               borderRadius:50,
          
               borderWidth:1,
               borderColor:Colors.lightGray,
               fontWeights:700
          },
          textInputContainer:{
              backgroundColor:"#eee",
              borderRadius:50,
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center"
             
          }
      }}

    //   renderLeftButton={()=>( <View style={{marginLeft:10}}>
    //     <Ionicons name="time" size={24}/>
       
    // </View>)}

    //   renderRightButton={()=>(<View style={styles.searchSymbolStyle}>
    //     <AntDesign style={{marginRight:5}}name="clockcircle"/>
    //     <Text>search</Text>
    // </View>)}
      
    />
</View>
  )
}


const styles= StyleSheet.create({
searchSymbolStyle:{
    flexDirection:"row",
    marginRight:8,
    backgroundColor:"white",
    padding:7.5,
    borderRadius:30,
    alignItems:"center",
    marginVertical:10
}
})