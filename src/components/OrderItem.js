import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Colors} from '../global/styles';

 OrderItem=()=>{
//     console.log("item :",item)
//    const {title,price}=item; 
return (
    <View style={[styles.container]}>
      <Text style={[styles.titleStyle]}>hey</Text>
      <Text style={styles.priceStyle}>hi</Text>
    </View>
  )
}

const styles= StyleSheet ({
   container:{
    flexDirection:"row",
    alignItem:"center",
    justifyContent:"center",
    padding:10,
    borderBoottomWidth:1,
    borderBoottomColor:Colors.gray
   },
   priceStyle:{
    fontSize:16,
    fontWeight:"bold"
   },
   titleStyle:{
    fontSize:16,
    fontWeight:"bold"
   }  
})

export default OrderItem