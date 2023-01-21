import React from 'react'
import { View ,StyleSheet,Text,Image,Pressable,SafeAreaView} from 'react-native'
import {Colors,margins,btn_light,btn,paddings} from "../../global/styles"
import Swipper from "react-native-swiper"


export default function WelcomeScreen({navigation}) 
{
return (
  <SafeAreaView>
<View >
<View style={[styles.header,paddings.Vrt.s]}>
  <Text style={styles.whiteText}><Text style={styles.orangeText}>Ym</Text> My</Text>
</View>

<View style={styles.container}>
     <Swipper autoplay={true}>
        <View style={styles.slider1}> 
               <Image source={require('../../../assets/images/foods/image1.jpg')} style={styles.img}/>
        </View>
        <View style={styles.slider1}>
               <Image source={require('../../../assets/images/foods/images2.jpg')} style={styles.img} />
        </View>
        <View style={styles.slider1}>
               <Image source={require('../../../assets/images/foods/image3.jpg')} style={styles.img} />
        </View>
     </Swipper>    
</View>

<View style={[margins.Vrt.s,margins.Hrz.moy,styles.contain]}>
     <View ><Text style={styles.brand} ><Text style={styles.orangeText}>V</Text>isit our restaurants</Text></View>
     <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center',marginTop:20}}>
     <View style={margins.Hrz.s}> 
            <Pressable style={btn_light} onPress={() => navigation.navigate('SignUp')}><Text style={styles.btnTextLight} >Sign Up</Text></Pressable> 
     </View> 
     <View style={margins.Hrz.s}>
          <Pressable style={btn} onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.btnText} >Sign In</Text>
          </Pressable> 
     </View> 
     </View>
</View>
</View>
</SafeAreaView>
)}
 
const styles= StyleSheet.create({
  container:{
       height:"55%"
  },
  brand:{
    fontWeight:"bold",
      fontSize:33,
      letterSpacing:7
  },
  contain:{
    padding:10,
    justifyContent:"center",
    alignItems:"center"
  },
  header:
  {
     backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center"
  },
   img:{
     width:"100%",
     height:"100%"
   },
   title:{
    fontWeight:"bold",
    fontSize:25,
    color:"orange"
   },

 slider1:{
     flex:3,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#9DD6EB"
 },
 slider2:{
    flex:3,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#97CAES"
},
slider3:{
    flex:3,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#92BBD9"
},
btnText:{
  color: Colors.white,
  fontSize:15,
  fontWeight:"bold"
},
btnTextLight:{
  color: "orange",
  fontSize:15,
  fontWeight:"bold"
},
orangeText:
{
  color:"orange",
  fontWeight:"bold",
  fontSize:50
},
whiteText:
{
  color:Colors.white,
  fontWeight:"bold",
  fontSize:40
}
})
