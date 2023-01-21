import React,{useRef, useState,} from 'react'
import * as Animatable from "react-native-animatable"
import { View ,StyleSheet,Text, TextInput,Pressable} from 'react-native'
import {Parameters,Colors,margins,btn,textInput,title,container,text,centred,box, paddings,flexDirection} from "../../global/styles"
import {Icon,SocialIcon} from 'react-native-elements'
import Header from '../../components/Header'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn(props) {

  const [TextInputFocsued, setTextInputFocsued]=useState(false)
  const passwordInput= useRef(1);
  const emailInput= useRef(2)

  const [password,setPassword]=useState("")
const [email,setEmail]=useState("")

  return (
<View syle={styles.container}>
       <Header Title="SIGN In" Type="arrow-left" navigation={props.navigation}/>
<View style={container}>

<View style={margins.Vrt.moy}>
      <Text style={text} >please enter your email and password</Text>
      <Text style={text} >register with your account</Text>
</View>
<View>
      <TextInput  style={textInput} placeholder="Email"  onChangeText={(email)=>{setEmail(email)}}  ref={emailInput} />
      <View style={[textInput,styles.container_flexRow]}>
      <Animatable.View animation={TextInputFocsued?"fadeInLeft":""} duration={400}>
             <Icon type='material-community'
             name="lock"
             size={28}
             color={Colors.gray}
             /> 
      </Animatable.View >
      <TextInput   placeholder="Password"  onChangeText={(password)=>{setPassword(password)}} style={styles.passwordInput} ref={passwordInput}
      onFocus={()=>{setTextInputFocsued(true);}}
      onBlur={()=>{setTextInputFocsued(false);}}/> 
      <Animatable.View animation={TextInputFocsued?"fadeInRight":""} duration={400}>
             <Icon type='material-community'
             name="eye"
             color={Colors.gray}
             size={28}
            /> 
      </Animatable.View>
      </View>
      <View  >
          <Pressable style={btn} 
           onPress={()=>{props.navigation.navigate("ClientTabs")}}
          //  onPress={()=>{if(email&&password)
          //     {
          //       signInWithEmailAndPassword(getAuth(), email, password).then(userCredentials=>{
          //         alert("loggedIn successfully")
          //         props.navigation.replace("ClientTabs")
          //       }).catch(error=>{
          //         alert(error.message)
          //       })
          //     }
          //     else {
          //       alert("all fields are required ")
          //     }}}   
        
          >
              <Text style={styles.btnText} >Sign-In</Text>
          </Pressable> 
      </View>  
      <View style={box}>
       <Text style={[text,centred,paddings.Vrt.s]} >Forgot password</Text>  
      </View> 
<View>

</View>
      <View style={[margins.Vrt.s,flexDirection.row,box]} >
          
      <SocialIcon
             type="facebook"
             button 
             style={Parameters.iconParameters}
             onPress={()=>{}}
             />
      <SocialIcon
             type="google"
             button 
             style={Parameters.iconParameters}
             onPress={()=>{}}
             />
         
      </View>  
      <View style={box}>
       <Text style={[text,centred]} >create a New account </Text>  
      </View> 
</View>
</View>
</View>
)}
 

const styles= StyleSheet.create({
   container:{
       flex:1,
   },
   container_flexRow:{
    flexDirection:"row",
   },
  passwordInput:{
   width:"80%"
  },
  btnText:{
     color: Colors.white,
     fontSize:15,
     fontWeight:"bold"
  },

})
