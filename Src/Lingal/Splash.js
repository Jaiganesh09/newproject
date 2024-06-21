import React,{useEffect,useState} from "react";
import {View,ActivityIndicator,SafeAreaView, Image,StyleSheet,StatusBar} from"react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';


const Splash=({navigation})=>{
    
    const[splash,setSplash]=useState(true);

    useEffect(() => {
        setTimeout(() => {
          setSplash(true);
         navigation.navigate('Login')
        }, 3000);
      }, []);
  return(


     <SafeAreaView style={{flex:1,backgroundColor:'#d95c36'}}>
        <StatusBar barStyle={'dark-content'}backgroundColor={'#add8e6'}/>
        <View style={jai.V1}>
        {/* <Image source={require('../Image/hogist.png')} ></Image> */}
        {/* <ActivityIndicator animating={splash} color={'white'} size={'large'}/> */}
        <LottieView
      source={require('../Lottie/Animation04.json')}
      autoPlay
      style={{width:120, height:200,}}
      loop={true}
      speed={0.8}
      />
        </View> 
      
      

     </SafeAreaView>


  )
}
export default Splash;

const jai=StyleSheet.create({

    V1:{
        height:hp('110%'),
        width:wp('100%'),
        justifyContent:'center',
        alignItems:'center',

    },
   


})
