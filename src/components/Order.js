import { View, Text ,StyleSheet} from 'react-native'
import { Colors, title } from '../global/styles'
import React from 'react'
import  {useSelector} from "react-redux"


export default function Order({item}) {
    const {name,price}=item
  return (
<View style={[styles.container]}>
    <Text style={[styles.titleStyle]}>{name}</Text>
    <Text style={styles.priceStyle}>{price}</Text>
</View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItem:"center",
        justifyContent:"space-between",
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:Colors.gray
       },
       priceStyle:{
        fontSize:16,
        fontWeight:"bold",
        opacity:0.5
       },
       titleStyle:{
        fontSize:16,
        fontWeight:"bold",
        marginHorizontal:15
       }  
})