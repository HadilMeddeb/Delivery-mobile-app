import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import {Icon,withBadge} from "react-native-elements"
import { Colors,paddings } from '../global/styles'


export default function HomeHeader() {
    const BadgeIcon= withBadge(0)(Icon)
  return (
    <View style={[styles.container,paddings.Vrt.s,paddings.Hrz.moy]}>
      <Icon type='material-community'
             name="menu"
             color={Colors.thirdColor}
             size={30}
              /> 
      <View style={[styles.header,paddings.Vrt.s]}>
        <Text style={styles.whiteText}><Text style={styles.orangeText}>Ym</Text> My</Text>
      </View>
      <BadgeIcon type='material-community'
             name="cart"
             color={Colors.thirdColor}
             size={32}
              /> 
    </View>
  )
}

const styles= StyleSheet.create({
container:{
    backgroundColor:Colors.mainColor,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
},
orangeText:
{
  color:"orange",
  fontWeight:"bold",
  fontSize:40
},
whiteText:
{
  color:Colors.white,
  fontWeight:"bold",
  fontSize:30
}


})