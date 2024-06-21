import React from "react";
import {SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import CardView from "react-native-cardview";


const Special=({navigation})=>{

    const Icon=()=>{
        navigation.navigate('CreatOrder')

    }

    return(
        <SafeAreaView style={{flex:1}}>
             <View style={jai.V1}>
            <View style={{marginLeft:15}}>
            <AntDesign  size={30} name="left"  color='white' />
            </View>
            <View style={{marginLeft:90}}>
            <Text style={jai.T1}>Special Order</Text>
            </View>
            </View>

           
            <View style={{marginTop:50,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>Icon()} activeOpacity={11}>
            <AntDesign  style={{marginLeft:280}}    size={38} name="pluscircle" color='black'  /> 
            </TouchableOpacity>
            </View>

            <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
            <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('7%'),width:wp('94%'),backgroundColor:'white',}}>



                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <Image  style={jai.I1}source={require('../Image/cont.png') }></Image>
                    <Text style={jai.T2}>Order ID:   #0001</Text>
                    <View style={jai.V2} >
                        <Text style={jai.T2}>PENDING</Text>
                    </View>
                </View>

            </CardView>
            </View>

            <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
            <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('7%'),width:wp('94%'),backgroundColor:'white',}}>



                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <Image  style={jai.I1}source={require('../Image/cont.png') }></Image>
                    <Text style={jai.T2}>Order ID:   #0002</Text>
                    <View style={jai.V2} >
                        <Text style={jai.T2}>PENDING</Text>
                    </View>
                </View>

            </CardView>
            </View>

        </SafeAreaView>
    )
            
    
}
export default Special;

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
    width:wp('20%'),
    backgroundColor:'yellow',
    justifyContent:'center',
    marginLeft:90,
    borderRadius:5
},
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},
T2:{
    marginLeft:10 ,
    fontSize:15,
    fontWeight:'600',
    color:'black'
},
I1:{
height:hp('5%'),
width:wp('10%'),
marginLeft:10
},

})