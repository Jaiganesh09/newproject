import react ,{useState}from "react";
import {SafeAreaView,Text,StyleSheet,View,FlatList,TouchableOpacity,Image,ScrollView}from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const OrderID=({navigation})=>{

    const Food=()=>{
        navigation.navigate('YourOrder')
    }

    const Icon=()=>{
        navigation.navigate('Bottom')
    }

    
    return(

        <SafeAreaView>
            <View style={jai.V1}>
                <TouchableOpacity onPress={()=>Icon()} activeOpacity={11}>
                <View style={{marginLeft:15}}>
            <AntDesign  size={30} name="left"  color='white' />
            </View>
            </TouchableOpacity>
            <View style={{marginLeft:100}}>
            <Text style={jai.T1}>My Menu</Text>
            </View>
            </View>

            <View style={{flexDirection:'row',marginTop:30}}>
                <Text style={jai.T2}>Order Date&Time</Text>
                <Text style={{marginLeft:80,fontWeight:'bold'}}>19/12/2022 10.00am</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:30}}>
                <Text style={{fontSize:17,fontWeight:'900',color:'black',marginLeft:20}}>Service Date</Text>
                <Text style={{marginLeft:115,fontWeight:'bold'}}>10/01/2023 </Text>
            </View>

            <View style={{flexDirection:'row',marginTop:30}}>
                <Text style={{fontSize:17,fontWeight:'900',color:'black',marginLeft:20}}>Delivery Address</Text>
                <Text style={{marginLeft:85,fontWeight:'bold'}}>SM Towers,OMR </Text>
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{alignContent:'center',justifyContent:'center'}}>
                <Text style={{fontSize:17,fontWeight:'900',color:'black',marginLeft:20}}>COVID Check</Text>
                </View>
                
                <View style={{height:hp('4%'),width:wp('25%'),backgroundColor:'#ffff00',marginLeft:130,alignContent:'center',justifyContent:'center',borderRadius:5}}>
                <Text style={{fontSize:15,fontWeight:'600',color:'black',textAlign:'center'}}> PENDING</Text>
                </View>
                
            </View>

            <View style={{flexDirection:'row',marginTop:30}}>
                <Text style={{fontSize:17,fontWeight:'900',color:'black',marginLeft:20}}> Order Status</Text>
                <TouchableOpacity onPress={()=>Food()} activeOpacity={11}>
                <View style={{height:hp('4%'),width:wp('25%'),backgroundColor:'#ffff00',marginLeft:135,alignContent:'center',justifyContent:'center',borderRadius:5}}>
                <Text style={{fontSize:15,fontWeight:'600',color:'black',textAlign:'center'}}>ORDERED </Text>
                </View>
                </TouchableOpacity>

            </View>


                <View style={{width:wp('100%'),borderWidth:0.2,borderColor:'black',marginTop:10}}>
                </View>
        
            <View style={{marginLeft:15,marginTop:30}}>
                <Text style={{fontSize:20,fontWeight:'900',color:'black',}}>BILL DETAILS</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={jai.V2}>
        <Octicons size={30} name="dot-fill"  color='green'/>
        </View>
        <Text style={{fontSize:15,fontWeight:'700',color:'black',marginLeft:25,marginTop:30}}>Dinner</Text>
        </View>

        <Text style={{marginLeft:20,fontWeight:'bold',marginTop:15}}>Chappathi 3 I Gravy Variety</Text>
        
        <View style={{marginTop:20}}>
        <Text style={{fontWeight:'bold',color:'black',marginLeft:10,fontSize:15}}>----------------------------------------------------------------</Text>
        </View> 

        <View style={{flexDirection:'row',height:hp('5%'),width:wp('100%'),}}>
            <View style={{alignItems:'center',justifyContent:'center',width:wp('33%')}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black',}}>QUANTIITY</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',width:wp('33%')}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black',}}>PRICE</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',width:wp('33%')}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black',}}>TOTAL</Text>
            </View>
        </View>

        <View >
        <Text style={{fontWeight:'bold',color:'black',marginLeft:10,fontSize:15}}>----------------------------------------------------------------</Text>
        </View>
        <View style={{flexDirection:'row',height:hp('5%'),width:wp('100%'),}}>
            <View style={{alignItems:'center',justifyContent:'center',width:wp('33%')}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black',}}>28</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',width:wp('33%')}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black',}}>₹55</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',width:wp('33%')}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black',}}>₹1925</Text>
            </View>
        </View>


        <View style={{height:hp('7%'),width:wp('95%'),backgroundColor:'black',marginTop:10,borderRadius:10,marginLeft:10,justifyContent:'center'}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'white',textAlign:'center'}}>SEE FOOD WEIGHT</Text>
        </View>

        <View style={{width:wp('100%'),borderWidth:0.2,borderColor:'black',marginTop:10}}></View>

    
        </SafeAreaView>
    )
}
export default OrderID;
const jai=StyleSheet.create({

    V1:{
        height:hp('13%'),
       width:wp('100%'),
       backgroundColor:'#c50504',
       alignItems:'center',
       borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       flexDirection:'row', 
   },
   V2:{
    height:hp('4%'),
    width:wp('8%'),
    borderColor:'green',
    borderWidth:1,
    borderRadius:5,
    marginTop:25,
    marginLeft:20,
    alignItems:'center'
},
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},
T2:{fontSize:17,fontWeight:'900',color:'black',marginLeft:20}
})