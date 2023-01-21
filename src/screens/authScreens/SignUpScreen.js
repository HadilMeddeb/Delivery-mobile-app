import React,{useRef, useState,} from 'react'
import * as Animatable from "react-native-animatable"
import { View ,StyleSheet,Text, TextInput,Pressable} from 'react-native'
import {Parameters,Colors,margins,btn,textInput,title,container,text,centred,box, paddings,flexDirection} from "../../global/styles"
import {Icon,SocialIcon} from 'react-native-elements'
import Header from '../../components/Header'
import app from "../../../firebase" 

export default function SignUp(props) {

  const [TextInputFocsued, setTextInputFocsued]=useState(false)
  const passwordInput= useRef(1);
  const emailInput= useRef(2)
const [password,setPassword]=useState("")
const [email,setEmail]=useState("")
const [fullname,setFullname]=useState("")
const [number,setNumber]=useState("")

  return (
<View syle={styles.container}>
       <Header Title="SIGN Up" Type="arrow-left" navigation={props.navigation}/>
<View style={container}>

<View style={margins.Vrt.moy}>
      <Text style={text} >please enter your infos to get registred</Text>
</View>

<View>
      <TextInput  style={textInput} placeholder="Email" onChangeText={(email)=>{setEmail(email)}} ref={emailInput} />
      <TextInput  style={textInput} placeholder="FullName" onChangeText={(fullname)=>{setFullname(fullname)}} ref={emailInput} />
      <TextInput Type="number" style={textInput} placeholder="phone Number" onChangeText={(number)=>{setNumber(number)}} ref={emailInput} />
      <View style={[textInput,styles.container_flexRow]}>
      <Animatable.View animation={TextInputFocsued?"fadeInLeft":""} duration={400}>
             <Icon type='material-community'
             name="lock"
             size={28}
             color={Colors.gray}
             /> 
      </Animatable.View >
      <TextInput   placeholder="Password" style={styles.passwordInput} onChangeText={(password)=>{setPassword(password)}} ref={passwordInput}
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
      <View    
  >
          <Pressable
               onPress={()=>{
                    console.log(email,password,fullname,number)
                     if(email&&password&&fullname&&number)
                     {
                      if(email.includes('@'))
                      {
                          if((password.length>=6))
                          {
                            
                                   app.auth().createUserWithEmailAndPassword(email,password,fullname,number)
                                   .then(()=>{alert("successfully registred");props.navigation.replace("ClientTabs")})
                                   .catch((err)=>{alert("error:",err.message);console.log("error :",err.message)})
                               
                            
                          }
                          else alert("password should be at least 6 letters ")
                      
                      }else alert("email is not valid")
                     }
                     else alert("all fields are needed")
                  
                }}
          style={btn} >
              <Text style={styles.btnText} >Sign-Up</Text>
          </Pressable> 
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
