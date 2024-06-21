import React,{useEffect,useState} from "react";
import {View,ActivityIndicator,SafeAreaView, Image,StyleSheet,StatusBar} from"react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";


const Splash=({navigation})=>{
    
    const[splash,setSplash]=useState(true);

    useEffect(() => {
        setTimeout(() => {
          setSplash(true);
         navigation.navigate('Customer')
        }, 2000);
      }, []);
  return(


     <SafeAreaView style={{flex:1,backgroundColor:'#c50504'}}>
        <StatusBar barStyle={'dark-content'}backgroundColor={'#c50504'}/>
        <View style={jai.V1}>
        <Image source={require('../Image/hogist.png')} ></Image>
        <ActivityIndicator animating={splash} color={'white'} size={'large'}/>
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
