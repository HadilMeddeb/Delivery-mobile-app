import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import {Icon} from"react-native-elements"
import { Colors} from '../global/styles'


export default function RestaurantAbout(props) {
    const categories=props.item.categories.map((cat)=>{return cat.title}).join(" | ")
    return (
    <View style={[{borderBottomWidth:0.5, marginBottom:20,paddingBottom:5}]}>
       <RestaurantImage image={{uri:props.item.image_url}}/>
       <RestaurantTitle  title={props.item.name}  />
       <RestaurantOthers categories={categories}
                         rating={props.item.rating}
                         review_count={props.item.review_count}
                         phone={props.item.phone}
                         adress={props.item.location} /> 
    </View>
)}


const  RestaurantOthers =(props)=>{
const  adress="  "+props.adress.city+" • "+props.adress.address1+" • "+props.adress.address2+" "+props.adress.address3 +" • "+props.adress.zip_code
return(
<View style={styles.RestaurantOthersStyle}>      
      <Text  style={styles.description}>{props.categories}</Text>
      <View style={[styles.description,styles.rowStyle]}>
      <Icon type='material-community'
             name="map-marker"
             size={20}
             color={Colors.gray}
            />
       <Text>
       {adress}
       </Text>
      </View>
      <View style={[styles.description,styles.rowStyle]}>
      <Icon type='material-community'
             name="phone"
             size={20}
             color={Colors.gray}
            />
            <Text style={styles.description}>{props.phone?props.phone:"unKnown" }</Text>
            <Text  style={styles.description}>🎫 {props.rating}⭐ 
        <Text style={{fontWeight:"bold"}}>{props.review_count} Review</Text>  
      </Text>
      </View>
  </View>)
}

const  RestaurantImage = (props)=>{
  console.log("*******************///////////////////////////////////////:")
  console.log(props.image)
  
  return (<Image  style={styles.image} source={props.image}/>)
}
const  RestaurantTitle =(props)=>{
  return  <Text  style={styles.title}>{props.title}</Text>
}




const styles=StyleSheet.create({
 description:{
    marginHorizontal:15,
    fontSize:15.5,
    fontWeight:"400",
 },
 rowStyle:{flexDirection:"row"},
 title:{
    fontWeight:"600",
    fontSize:29,
    marginHorizontal:15,
    marginVertical:10
 },
image:{
    height:200,
    width:"100%"
},
shadowProp: {
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
RestaurantOthersStyle:{
  flexDirection:"column",
  justifyContent:"flex-start",
  marginBottom:10
}
})