import React from "react";
import {View,Text,SafeAreaView,StyleSheet,ImageBackground}from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import CardView from "react-native-cardview";

const Change=()=>{

    return(
        <SafeAreaView style={{flex:1,}}>
        <ImageBackground style={{height:hp('120%'),width:wp('100%')}}  source={require('../Image/coffee.png')}>
     
            <View style={jai.V1}>
            <AntDesign  size={30} name="left"  color='white' />
            <View style={{marginLeft:110}}>
            <Text style={jai.T1}>My Menu</Text>
            </View>
            </View>

            <View style={{marginTop:150,marginLeft:13}}>
            <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('50%'),width:wp('94%'),backgroundColor:'white',}}>

                    <Text style={{fontSize:15,fontWeight:'bold',color:'#000000',marginLeft:30,marginTop:40}}>Enter Your new Menu!</Text>
                    <View style={{height:hp('10%'),width:('90%'),backgroundColor:'white',marginTop:50,marginLeft:30}}>
                    <Text>New Menu</Text>
                    </View>

            </CardView>
            </View>

            </ImageBackground>
        </SafeAreaView>
       

    )
}
export default Change;
const jai=StyleSheet.create({

    V1:{
        height:hp('13%'),
       width:wp('100%'),
       backgroundColor:'#c50504',
       alignItems:'center'
       ,borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       flexDirection:'row'
   },
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},
})