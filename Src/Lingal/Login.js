import React from "react";
import {SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity,ToastAndroid,}from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TextInput}from "react-native-paper";
import { useState } from "react";
import colour from "../Asste/Colour";
import Fountfamily from "../Asste/Fountfamily";
import LottieView from 'lottie-react-native';
import FlashMessage from "react-native-flash-message"; 

const Login=({navigation})=>{

    const Handlelogin=()=>{

        // if (password=="") {
        //     ToastAndroid.show("Enter valid password",ToastAndroid.SHORT);
        //      return;
        //   }
        //   if (moblie.length < 10 || !moblie){
        //     ToastAndroid.show('Invalid Phone Number',ToastAndroid.SHORT)
        //     return;
        //   }

        //   else{
            navigation.navigate('Handling')
        //   }
    
       
        
    }
        


    const[password,setPassword]=useState();
     const[moblie,setMoblie]=useState();

     

    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',}}>
            

            <View style={{height:hp('20'),width:wp('100'),}}>
                        <LottieView
                source={require('../Lottie/Animation03.json')}
                autoPlay
                style={{}}
                loop={true}
                speed={0.5}
                />
                </View>
            
            <View style={{marginLeft:25}}>
            <Text style={jai.T2}>LOGIN</Text>
            </View>

            

            <View >
            <TextInput
                
                label="Moblie"
                cursorColor={colour.darkB}
                theme={{colors:{primary:colour.black,}}}
                outlineStyle={{width:wp('89%'), borderWidth:1,borderRadius:8, borderColor:'black',
                backgroundColor:colour.white,height:53}}
                style={{fontSize:14,height:52,width:wp('89%'),fontWeight:'500',marginTop:50,fontFamily:Fountfamily.rmediumitalic,marginLeft:20}}
                mode="outlined"
                value={moblie}
                // placeholder=''
                // placeholderTextColor={'blue'}
                onChangeText={moblie => setMoblie(mo)}
                // secureTextEntry
                keyboardType='phone-pad'
                maxLength={10}
                left={<TextInput.Icon icon="phone" style={{marginTop:17}} size={21} iconColor="black" />}
              />
                
            </View>

            <View style={{marginTop:10}}>
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

                    <View style={{alignItems:'flex-end',width:wp('94')}}>
            <View style={{marginTop:8,flexDirection:'row',}}>
                            <Text style={{color:'black',fontSize:18,fontWeight:'400',marginLeft:70}}>Don't have an account ?</Text>
                            <TouchableOpacity onPress={()=>hello()}>
                            <Text style={{color:'#c50504',fontSize:18,fontWeight:'500',marginLeft:8}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        </View>

            <TouchableOpacity onPress={()=>Handlelogin()} activeOpacity={12}>
            <View style={jai.V3}>
            <Text style={jai.T3}>LOGIN</Text>
            </View>
            </TouchableOpacity>

            

            
        </SafeAreaView>

    )
}

export default Login;

const jai=StyleSheet.create({

    
  
    V3:{
    height:hp('7%'),
    width:wp('90%'),
    backgroundColor:'#d95c36',
    marginTop:50,
    marginLeft:20,
    borderRadius:8,
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


// import React,{useEffect,useState} from 'react';
// import { SafeAreaView,View,Text, BackHandler,} from 'react-native';
// import TouchID from 'react-native-touch-id';




// const Touchid=()=>{

//     const optionalConfigObject = {
//         title: 'Authentication Required', // Android
//         imageColor: '#e00606', // Android
//         imageErrorColor: '#ff0000', // Android
//         sensorDescription: 'Touch sensor', // Android
//         sensorErrorDescription: 'Failed', // Android
//         cancelText: 'Cancel', // Android
//         fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
//         unifiedErrors: false, // use unified error messages (default false)
//         passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
//       };

//         useEffect (()=>{
//                 Handlthouchid
//         } );

//         const[bio,setBio]=useState()

        
       
// const Handlthouchid=()=>{
//     TouchID.isSupported(optionalConfigObject).then((biometryType)=>{
//         if (biometryType === 'FaceID') {
//             console.log('FaceID is supported.');
//         } else {
//             if(bio){
//                 return null
//             }
//             console.log('TouchID is supported.');
//             TouchID.authenticate('',optionalConfigObject).then(()=>{
//                     console.log('success',success)
//                     setBio(success)
//             }).catch((err)=>{
//                 // console.log('Error',err)
//                 BackHandler.exitApp();
//             })
//         }
//     })
// }
//     return(
//         <SafeAreaView style={{flex:1}}>
//                 <View>
//                         <Text>kjhgfdfghjkl</Text>
//                 </View>
//         </SafeAreaView>


//     )
// }

// export default Touchid;