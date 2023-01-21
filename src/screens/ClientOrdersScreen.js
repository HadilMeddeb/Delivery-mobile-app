import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"
import app from "../../firebase" 
import Menuitems from "../components/Menuitems.js"

export default function ClientOrdersScreen() {
const {items,restaurantName}= useSelector((state)=>state.cartReducer.selectedItems)
const total=items.map((item)=>Number(item.price.replace("$",""))).reduce((previous,current)=>previous+current,0)
const [lastOrder, setLastOrder]= useState([])

useEffect(() => {
  console.log("-------------------------------------lastOrder :",lastOrder)
  const db = app.firestore();
  const unsubscribe = db
    .collection("orders")
    .orderBy("createdAt", "desc")
    .limit(1)
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
         console.log("***********************in map",doc.data())
         const result=[doc.data()].map((item,index)=>item.items)
        setLastOrder(result[0]);
      });
    });
    return () => unsubscribe();
   
},[]);

console.log("-------------------------------------lastOrder2222**************************************************************** :",lastOrder.items)
console.log("errrrrrrrrrroooooooooooooo",lastOrder)

const totleInCurrency=total.toLocaleString("en",{
  style:"currency",
  currency:"USD"
})

  return (
    <View>
     <View>
     <Text style={styles.TitleStyle}>Check Your Orders </Text>
     </View>

    <Menuitems foods={lastOrder} RestaurantName={restaurantName} hideCheckBox ={true}/>  
    <View style={{paddingHorizontal:20,paddingVertical:20}}>
       <Text style={styles.TotalStyle}>Details : </Text>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItem:"center"}}>
      <Text > RestaurantName  : -------------------------------------------------</Text>
      <Text> {restaurantName}</Text>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItem:"center"}}>
      <Text > Your subTotal is : -------------------------------------------------</Text>
      <Text> {totleInCurrency} $</Text>
    </View>
    </View>
    </View>
  )
}

const styles= StyleSheet.create({
TitleStyle:{
  fontWeight:"bold",
  fontSize:20,
  marginLeft:20,
  marginTop:100,
  marginBottom:20,
  flexDirection:"row",
  justifyContent:"center"
},
TotalStyle:{
  fontWeight:"bold",
  fontSize:15,
  margin:5,
  marginTop:30,
  flexDirection:"row",
  justifyContent:"center",
  
}
})