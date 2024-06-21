import React from "react";
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import CardView from "react-native-cardview";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';

const Handling =({navigation})=>{

    const Loading=()=>{
        navigation.navigate('Loading')
    }

    const Unloading=()=>{
        navigation.navigate('Unloading')
    }

    return(
            <SafeAreaView style={{flex:1,backgroundColor:'#add8e6'}}>

                <View style={{alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:'900',color:'#000000'}}>HANDLING</Text>
                </View>

 <View style={{alignItems:'center',justifyContent:'center',height:hp('90%'),width:wp('100%'),}}>
            <CardView
          cardElevation={15}
          cardMaxElevation={10}
          cornerRadius={15}
            style={{height:hp('53%'),width:wp('90%'),backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>

                <View style={{flexDirection:'row',justifyContent:'center'}}> 

                 <TouchableOpacity onPress={()=>Loading()} activeOpacity={11}> 
               <View style={{
        height:hp('19%'),
        width:wp('35%'),
        backgroundColor:'lightyellow',
        // marginTop:30,
        marginLeft:5,
        borderWidth:1,
        // borderColor:'#b22222',
        borderRadius:5
        }}>
                {/* <Image source={require('../Image/Menu.png')} style={jai.I2}></Image> */}
                <Text style={jai.T2}>Loading</Text>
                <LottieView
                source={require('../Lottie/Animation02.json')}
                autoPlay
                style={{}}
                loop={true}
                speed={0.6}
                />
               </View>
               </TouchableOpacity> 

               <TouchableOpacity onPress={()=>Unloading()} activeOpacity={11}> 
               <View style={jai.V4}>
                {/* <Image source={require('../Image/Menu.png')} style={jai.I2}></Image> */}
                <Text style={jai.T2}>Unloading</Text>
                <LottieView
                source={require('../Lottie/Animation01.json')}
                autoPlay
                style={{}}
                loop={true}
                speed={0.8}
                />
               </View>
               </TouchableOpacity> 

               
                </View>
                
                
                
                

            </CardView>
            </View>

            </SafeAreaView>
    )
}
export default Handling;


const jai=StyleSheet.create({

    V4:{
        height:hp('19%'),
        width:wp('35%'),
        backgroundColor:'lightyellow',
        // marginTop:30,
        marginLeft:20,
        borderWidth:1,
        // borderColor:'#b22222',
        borderRadius:5
        },
        T2:{
            fontSize:15,
            textAlign:'center',
            color:'black',
            fontWeight:'700',
            marginTop:5
        },
})