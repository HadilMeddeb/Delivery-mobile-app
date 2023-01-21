import { View, Text , TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import {Icon} from"react-native-elements"
import { Colors, margins, paddings } from '../global/styles'

export  function FoodCard({
   restaurantName,
   numberOfReview,
   businessAdress,
   farAway,
   averageReview,
   image,
   screenWidth
}) {

  
  return (
  
  <View>
      <View style={{...styles.card,marginHorizontal:4}}>
      <View>
      <Image
      source={{"uri":image}}
      style={{...styles.image,width:screenWidth }}/>
      </View>
      <View style={[paddings.Vrt.s]}>
         <View>
           <Text style={styles.restaurantName}>{restaurantName}</Text>
         </View>
         <View style={styles.rowContainer}>
             <View  style={styles.distance}>
             <Icon type='material-community'
             name="map-marker"
             size={18}
             color={Colors.gray}
             iconStyle={{
               marginTop:3
             }}/> 
              <Text style={styles.min}>{farAway}</Text>
             
              <View style={{flex:9,flexDirection:"row"}}>
                   <Text style={styles.adress}>|  {businessAdress}</Text>
               </View>
             </View>
             
         </View>
      </View>
    </View>
    <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>  
        <Text>{numberOfReview} review</Text> 
    </View>
  </View>
 
     )
}





const styles=StyleSheet.create({
  rowContainer:
  {
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"row"
  },
   card:
   {
     marginHorzontal:9,
     borderTopRightRadius:5,
     borderTopRightRadius:5,
     borderWidth:1,
     borderColor:Colors.lightGray,
     borderBottomLeftRadius:5,
     borderBottomRightRadius:5     
   },
   image:
   {
     borderTopLeftRadius:5,
     borderTopRightRadius:5,
     height:150,
   },
   restaurantName:{
    fontSize:17,   
    fontWeight:"bold",
    color:Colors.mainColor,
    marginTop:5,
    marginLeft:10
   },
   distance:{
     flex:4,
     flexDirection:"row",
     borderRightColor:Colors.gray,
     paddingHorizontal:5,
     borderRightWidth:1
  },
  Min:{
   fontSize:12,
   fontWeight:"bold",
   paddingTop:5,
   color:Colors.mainColor 
  },
  adress:{
    fontSize:12,
    paddingTop:5,
    color:Colors.mainColor,
    paddingHorizontal:10
  },
  review:{
    marginTop:5,
    position:"absolute",
    top:0,
    right:10,
    backgroundColor:'rgba(52,52,52,0.3)',
    padding:2,
    alignItems:"center",
    justifyContent:"center",
    borderTopRightRadius:5,
    borderBottomLeftRadius:12
  },
  average:{
    color:Colors.white,
    fontSize:20,
    fontWeight:'bold',
    marginTop:-3

  }
})