import React,{useState} from "react";
import {SafeAreaView,View,Text,Image,TouchableOpacity} from "react-native";
import CardView from "react-native-cardview";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Vehicle=({navigation})=>{
   
    const  handleClick = ()=>{

       navigation.navigate('OrderReport')

    }
    const  Scan = ()=>{

        navigation.navigate('Scaner')
 
     }

    return(
            <SafeAreaView style={{flex:1,backgroundColor:'#add8e6'}}>
                <View style={{alignItems:'center',marginTop:20,width:wp('100'),height:hp('7'),}}>
                <Text style={{fontSize:20,fontWeight:'900',color:'#000'}}>Vehicledetails</Text>
                </View>

              


            <View style={{alignItems:'center',justifyContent:'center',width:wp('100%')}}>
            <CardView
          cardElevation={0.1}
          cardMaxElevation={0.1}
          cornerRadius={10}
            style={{height:hp('90%'),width:wp('90%'),backgroundColor:'#fff',alignItems:'center'}}>

                <View style={{marginTop:25}}>
                <View style={{height:hp('15%'),width:wp('80'),backgroundColor:'#ffa500',borderRadius:5}}>
                    <View style={{flexDirection:'row'}}>
                <View style={{height:hp('13%'),width:wp('30'),marginTop:7,backgroundColor:'#fff',justifyContent:'center',borderRadius:10,marginLeft:10}}>
                <Image source={require('../Image/Truck03.png')} style={{height:hp('11%'),width:wp('30')}} />
                </View>
                <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',marginLeft:20}}>
                    <View style={{flexDirection:'column',}}>
                    <Text style={{fontSize:15,fontWeight:'700',color:'#fff'}}>A1234</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#000'}}>EICHER</Text>
                    </View>
                </View>
                </View>
            </View>

            </View>

                 
            <View style={{flexDirection:'row',paddingHorizontal:25,marginTop:10}}>
           
        {/* <TouchableOpacity onPress={()=>handleClick()}>
        <View style={{paddingHorizontal:5,borderRadius:5,alignItems:'center',justifyContent:'center',borderWidth:1,marginTop:5}}>
        <Text style={{fontSize:17,color:'black',fontWeight:'600'}}></Text>
        </View>
        </TouchableOpacity>  */}

        </View>
                            <View style={{padding:12}}>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000',letterSpacing:0.5,lineHeight:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                        </View>

                            <View style={{height:hp('8%'),width:wp('80%'),flexDirection:'row',marginTop:10}}>
                                <View style={{height:hp('8%'),width:wp('40%'),flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>From:</Text>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>Date:</Text>
                        </View>
                        <View style={{height:hp('8%'),width:wp('40%'),flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>To:</Text>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>Time:</Text>
                        </View>
                        </View>

                        <View style={{padding:10}}>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000',letterSpacing:0.5,lineHeight:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                        </View>

                        <TouchableOpacity onPress={()=>Scan()} activeOpacity={12}>
                        <View style={{
                                    height:hp('7%'),
                                    width:wp('80%'),
                                    backgroundColor:'#d95c36',
                                    marginTop:60,
                                    // marginLeft:20,
                                    borderRadius:8,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                            <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'white'
                                }}>SCANER</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleClick()} activeOpacity={12}>
                        <View style={{
                                    height:hp('7%'),
                                    width:wp('80%'),
                                    backgroundColor:'#d95c36',
                                    marginTop:40,
                                    // marginLeft:20,
                                    borderRadius:8,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                            <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'white'
                                }}>View Orders & Reports</Text>
            </View>
            </TouchableOpacity>

                        </CardView>
                        </View>

                    

                       
            </SafeAreaView>
    )
}
export default Vehicle;