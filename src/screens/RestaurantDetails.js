import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RestaurantAbout from "../components/RestaurantAbout";
import Menuitems from "../components/Menuitems";
import ViewCart from "../components/ViewCart" 


const foods = [
  {
    name: "cake",
    description: "hello its delicious pasata",
    price: "12$",
    image: require("../../assets/images/foodCategories/react_gateau.jpeg"),
    id: 1,
  },
  {
    name: "dish",
    description: "hello its delicious pasata",
    price: "12$",
    image: require("../../assets/images/foodCategories/react_dish.jpg"),
    id: 2,
  },
  {
    name: "pizza",
    description: "hello its delicious pasata",
    price: "12$",
    image: require("../../assets/images/foodCategories/react_pizza.jpg"),
    id: 3,
  },
  {
    name: "salad",
    description: "hello its delicious pasata",
    price: "12$",
    image: require("../../assets/images/foodCategories/react_salade.jpeg"),
    id: 4,
  },
  {
    name: "juice",
    description: "hello its delicious pasata",
    price: "12$",
    image: require("../../assets/images/foodCategories/react_juice.jpg"),
    id: 5,
  },
];

export default function RestaurantDetails({route,navigation}) {
  const item=route.params;
  console.log("item ****************************:", item.alias)
  return (
    <View>
      <RestaurantAbout item={item} />
      <Menuitems RestaurantName={item.name} hideCheckBox={false} foods={foods}/>
      <ViewCart navigation={navigation} RestaurantName={item.name}/>
    </View>
  );
}

const styles = StyleSheet.create({
  deviderStyle: {
    width: 1.8,
    marginVertical: 20,
  },
});
