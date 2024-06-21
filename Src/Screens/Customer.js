import React from "react";
import {SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity}from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import CardView from "react-native-cardview";


const Customer=({navigation})=>{
    
    const Mani =()=>{

        navigation.navigate('Login')
        
        }

    return(

        <SafeAreaView style={{flex:1}}>
            <View style={jai.V1}>
            <View style={{marginLeft:15}}>
            <AntDesign   size={30} name="left"  color='white'  />
            </View>
            <View style={{marginLeft:90}}>
            <Image  style={jai.I1} source={require('../Image/hogist.png')}></Image>
            </View>
            </View>
            <View style={jai.V2}>
            <Text style={jai.T1}>Please select your services !</Text>
            </View>
                <View style={{alignItems:'center',marginTop:30}}>
            <CardView
          cardElevation={15}
          cardMaxElevation={15}
          cornerRadius={15}
            style={{height:hp('53%'),width:wp('90%'),backgroundColor:'white',}}>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}> 
                <TouchableOpacity onPress={()=>Mani()} activeOpacity={11}>
               <View style={jai.V3}>
                <Image source={require('../Image/costomar.png')} style={jai.I2}></Image>
                <Text style={jai.T2}>ODC Customer</Text>
               </View>
               </TouchableOpacity>

                <View style={jai.V5}>
                <Image source={require('../Image/cafe.png')} style={jai.I2}></Image>
                <Text style={jai.T2}>Cafeteria</Text> 
                <Text style={jai.T2}>Managrment</Text> 
                </View>
                </View>

                <View style={{alignItems:'center'}}>
                <View style={jai.V4}>
                <Image source={require('../Image/indust.png')} style={jai.I2}></Image>
                <Text style={jai.T2}>Industrial &</Text>
                <Text style={jai.T2}>Corporate</Text>
                </View>
                </View>

            </CardView>
            </View>

         
      
            

        </SafeAreaView>
    )

}
export default Customer;

const jai =StyleSheet.create({

    V1:{
     height:hp('13%'),
    width:wp('100%'),
    backgroundColor:'#c50504',
    alignItems:'center'
    ,borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    flexDirection:'row'
},


V2:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:50
},
V3:{
    height:hp('19%'),
    width:wp('35%'),
    backgroundColor:'white',
    marginTop:40,
    marginLeft:8,
    borderWidth:1,
    borderColor:'#b22222',
    borderRadius:5
    },
    
    V4:{
    height:hp('19%'),
    width:wp('35%'),
    backgroundColor:'white',
    marginTop:30,
    borderWidth:1,
    borderColor:'#b22222',
    borderRadius:5
    },
    V5:{
        height:hp('19%'),
        width:wp('35%'),
        backgroundColor:'white',
        marginTop:40,
        marginLeft:19,
        borderWidth:1,
        borderColor:'#b22222',
        borderRadius:5
        },
T1:{
    fontSize:20,
    fontWeight:'600',
    color:'black'
},
T2:{
    fontSize:15,
    textAlign:'center',
    color:'black',
    fontWeight:'300'
},

I1:{
    height:40,
    width:wp('40%'),
    
},
I2:{
height:hp('10%'),
width:wp('25%'),
marginLeft:20,
marginTop:10
},


}

)

    
