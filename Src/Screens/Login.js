import React from "react";
import {SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity,ToastAndroid}from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TextInput}from "react-native-paper";
import { useState } from "react";
import colour from "../Asste/Colour";
import Fountfamily from "../Asste/Fountfamily";



const Login=({navigation})=>{

    const Hello =()=>{

        navigation.navigate('Menu')
        
        }

        const Icon =()=>{

            navigation.navigate('Customer')
            
            }


    const[password,setPassword]=useState();
     const[email,setEmail]=useState();

     

    return(
        <SafeAreaView style={{flex:1}}>
              
            <View style={jai.V1}>
                <TouchableOpacity onPress={()=>Icon()}activeOpacity={11}>
            <AntDesign style={{marginLeft:20,marginTop:10}} size={30} name="left"  color='white' />
            </TouchableOpacity>
            <View style={jai.V2}>
            <Image source={require('../Image/logo.png')}></Image>
            <Text style={jai.T1}>Your F&B</Text>
            </View>
            </View>
            
            <View style={{marginTop:40,marginLeft:20}}>
            <Text style={jai.T2}>Login</Text>
            </View>

            <View >
            <TextInput
                
                label="Email"
                cursorColor={colour.darkB}
                theme={{colors:{primary:colour.black,}}}
                outlineStyle={{width:wp('89%'), borderWidth:1,borderRadius:8, borderColor:'black',
                backgroundColor:colour.white,height:53}}
                style={{fontSize:14,height:52,width:wp('89%'),fontWeight:'500',marginTop:50,fontFamily:Fountfamily.rmediumitalic,marginLeft:20}}
                mode="outlined"
                value={email}
                // placeholder=''
                // placeholderTextColor={'blue'}
                onChangeText={email => setEmail(email)}
                // secureTextEntry
                left={<TextInput.Icon icon="email" style={{marginTop:17}} size={21} iconColor="black" />}
              />
                
            </View>

            <View >
            <TextInput
                
                label="Password"
                cursorColor={colour.darkB}
                theme={{colors:{primary:colour.black,}}}
                outlineStyle={{width:wp('89%'), borderWidth:1,borderRadius:8, borderColor:'black',
                backgroundColor:colour.white,height:53}}
                style={{fontSize:14,height:52,width:wp('89%'),fontWeight:'500',marginTop:10,fontFamily:Fountfamily.rmediumitalic,marginLeft:20}}
                mode="outlined"
                value={password}
                onChangeText={password => setPassword(password)}
                // secureTextEntry
                left={<TextInput.Icon icon="lock" style={{marginTop:17}} size={21} iconColor="black" />}
                
              />
                
            </View>

            <TouchableOpacity onPress={()=>Hello()} activeOpacity={11}>
            <View style={jai.V3}>
            <Text style={jai.T3}>Login</Text>
            </View>
            </TouchableOpacity>

            

            
        </SafeAreaView>

    )
}

export default Login;

const jai=StyleSheet.create({

    V1:{
        height:hp('35%'),
       width:wp('100%'),
       backgroundColor:'#c50504',
    //    alignItems:'center',
       borderBottomLeftRadius:150,
    //    justifyContent:'center'
   },
   V2:{
    alignItems:'center',
   justifyContent:'center',
   height:35,width:wp('100%'),
   marginTop:80
},
    V3:{
    height:hp('7%'),
    width:wp('90%'),
    backgroundColor:'#c50504',
    marginTop:50,
    marginLeft:20,
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
},
   T1:{
    fontSize:26,
    fontWeight:'900',
    color:'white'
},
T2:{
    fontSize:18,
    fontWeight:'900',
    color:'black'
},
T3:{
    fontSize:20,
    fontWeight:'500',
    color:'white'
},
  

})