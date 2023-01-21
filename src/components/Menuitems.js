import { View, Text, StyleSheet,Image,ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";
import { Colors } from "../global/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useDispatch, useSelector} from "react-redux"

export default function Menuitems(props) {
const dispatch = useDispatch()
const selectItems=(item,checkboxValue)=>dispatch({
  type:"ADD_TO_CART",
  payload:{...item,checkboxValue,RestaurantName:props.RestaurantName}
})

const cartItems= useSelector((state)=>state.cartReducer.selectedItems.items)
const FoodInCart=(food,cartItems)=>{return cartItems.find(item=>item.id==food.id)}
console.log("from menuitem  123456mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",props.foods)
  return (   
   <View>
           <ScrollView showsVerticalScrollIndicator={true}>
         { 
            props.foods.map((food,index)=>
             {
              return (
            
              <View key={index} style={{flexDirection:"row",borderBottomWidth:0.2,borderColor:Colors.gray,paddingHorizontal:15,paddingVertical:5}}>
              {props.hideCheckBox?<></>:<BouncyCheckbox
              innerIconStyle={{borderColor:Colors.secondColor,borderWidth:1.5,borderRadius:0}}
              iconStyle={{borderRadius:0}}
              fillColor={Colors.secondColor}
              unfillColor={Colors.thirdColor}
              onPress={(checkboxValue)=>{selectItems(food,checkboxValue)}}
              isChecked={FoodInCart(food,cartItems)}
              />}  
              <FoodInfo food={food} />
              <FoodImage food={food}/>
            </View>

             
            )})
         }
       </ScrollView>
   
   </View>
      
   
   )}

const FoodInfo = (props) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.name}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
   
  );
};

const FoodImage = (props ) => (
  <View>
    <Image
      source={props.food.image }
      style={styles.imageStyle}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
imageStyle:{
    width: 80,
        height: 75,
        borderRadius: 8,
}

});
