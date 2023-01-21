import { Column, Row } from "native-base";
import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {Icon} from 'react-native-elements'
import { Colors, Parameters } from "../global/styles";
export default function Header({Title,Type,navigation}) {
  return (
    
    <View style={styles.header}>
       <Icon type='material-community'
             name={Type}
             color={Colors.white}
             size={28}
             onPress={()=>{navigation.goBack()}}  /> 
       <Text style={styles.HeaderText}>{Title}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    flexDirection: "row",
    height: Parameters.headerHeight,
    alignItems:"center",
    paddingVertical:0,
    paddingLeft:20
  },

  HeaderText:{
   color:Colors.white,
   fontSize:28,
   fontWeight:"bold",
   marginLeft:15
  },
});
