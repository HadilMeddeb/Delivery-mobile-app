import { View, Text,StyleSheet,TouchableOpacity,Modal } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../global/styles'
import  {useSelector} from "react-redux"
import Order from './Order'
import app from '../../firebase'
export default function ViewCart(props) {

const [isVesible, setIsVesible]= useState(false)  
const {items,restaurantName}= useSelector((state)=>state.cartReducer.selectedItems)
const total=items.map((item)=>Number(item.price.replace("$",""))).reduce((previous,current)=>previous+current,0)

const totleInCurrency=total.toLocaleString("en",{
  style:"currency",
  currency:"USD"
})



const checkOutModelContent=()=>{
return(  
<View style={styles.modalContainer}>
<View style={[styles.modalCheckoutContainer]}>
 <TouchableOpacity onPress={()=>{setIsVesible(false)}}>
   <Text style={styles.restaurantName}>{restaurantName}</Text>
   {items.map((item,index)=><Order Key={index} item={item}/>)}
   <View style={styles.RowContainer}>
       <Text style={styles.subtotalText}>SubTotal</Text>
       <Text style={styles.subtotalText}>{totleInCurrency} £</Text>
   </View>
 <View style={{flexDirection:"row", justifyContent:"center"}} >
 <View style={styles.RowContainerCenter}  >
   <Text style={styles.checkoutTextStyle} onPress={()=>{addOrder()}}>Checkout</Text>
   </View>
 </View>
 </TouchableOpacity>

</View>
</View>

)}

const addOrder=()=>{
 const db=app.firestore();
 db.collection("orders").add({
   items:items,
   restaurantName:restaurantName,
   createdAt:app.firebase.firestore.FieldValue.serverTimestamp()
})
 props.navigation.navigate("orders")
  setIsVesible(false)
}


return (  
  <>
  <Modal animationType="slide" 
         visible={isVesible}
         transparent={true}
         onRequestClose={()=>{setIsVesible(false)}}
>
 {checkOutModelContent()}
</Modal>

  {total==0? (<></>): 
  ((<View  style={styles.container}>
      <View style={styles.viewCartStyle}>
     <TouchableOpacity onPress={()=>{setIsVesible(true); console.log("isvesible :",isVesible)}} style={styles.cartStyle}>
     <Text style={styles.textStyle}>View Cart</Text>
     <Text style={[styles.textStyle,{marginHorizontal:10}]}>{totleInCurrency} $</Text>
     </TouchableOpacity>
    </View>
   </View>))
   }
  </>
  )
}


const styles=StyleSheet.create({
  container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
  position:"absolute",
  bottom:100,
  zIndex:999
  },
  textStyle:{
    color:Colors.thirdColor,
    fontWeight:"bold"
  },
  cartStyle:{
   borderRadius:20,
   backgroundColor:Colors.mainColor,
   alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
   padding:13,
   width:300,
   position:"relative"
  },
  viewCartStyle:{
   flexDirection:"row",
   justifyContent:"center",
   width:"100%",
  
  },
  ModelViewContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"

  },
  ModelStyle:{
  width:"100%",
  backgroundColor:Colors.mainColor,
  padding:10,
  borderRadius:20,
  width:150,
  alignItems:"center"
  },
  textModel:{
    color:Colors.thirdColor
  },


  // for the modal
  modalContainer:{
    flex:1,
    justifyContent:"flex-end",
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  RowContainer:{
    paddingVertical:20,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  RowContainerCenter:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.mainColor,
    borderRadius:30,
    width:150,
    padding:10
  },
  checkoutTextStyle:{
    color:Colors.thirdColor,
    fontSize:16,
    fontWeight:"bold"
  }

})