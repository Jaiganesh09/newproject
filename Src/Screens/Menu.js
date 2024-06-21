import React from "react";
import{SafeAreaView,View,Text,ImageBackground,StyleSheet,Image,TouchableOpacity} from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import CardView from "react-native-cardview";

const Menu=({navigation})=>{

    const Sachin=()=>{
        navigation.navigate('Bottom')
    }

    
    const Order=()=>{
        navigation.navigate('Special')
    }

    const Analytics=()=>{
        navigation.navigate('Report')
    }

    const Icon=()=>{
        navigation.navigate('Login')
    }


return(
    <SafeAreaView style={{flex:1}}>
        <ImageBackground style={jai.IB} source={require('../Image/cook.png')}>
        <View style={jai.V1}>
            <View style={{marginLeft:90}}>
            <Image  style={jai.I1} source={require('../Image/hogist.png')}></Image>
            </View>
            <TouchableOpacity onPress={()=>Icon()}activeOpacity={11}>
            <AntDesign style={{marginLeft:50}} size={30} name="logout"  color='white' />
            </TouchableOpacity>
            </View>


            <View style={{alignItems:'center',marginTop:30}}>
            <CardView
          cardElevation={15}
          cardMaxElevation={15}
          cornerRadius={15}
            style={{height:hp('53%'),width:wp('90%'),backgroundColor:'white',marginTop:95,}}>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20,marginRight:10}}> 
                 <TouchableOpacity onPress={()=>Sachin()} activeOpacity={11}> 
               <View style={jai.V4}>
                <Image source={require('../Image/Menu.png')} style={jai.I2}></Image>
                <Text style={jai.T2}>My Menu</Text>
               </View>
               </TouchableOpacity> 

                <View style={jai.V4}>
                <Image source={require('../Image/safety.png')} style={jai.I2}></Image>
                <Text style={jai.T2}>Food Safety Check</Text> 
                </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginRight:10}}>
                <TouchableOpacity onPress={()=>Order()} activeOpacity={11}> 
                <View style={jai.V4}>
                <Image source={require('../Image/pad.png')} style={jai.I2}></Image>
                <Text style={jai.T2}>Special Order</Text>
                </View>
                </TouchableOpacity> 

                <TouchableOpacity onPress={()=>Analytics()} activeOpacity={11}> 
                <View style={jai.V4}>
                <Image source={require('../Image/analy.png')} style={jai.I3}></Image>
                <Text style={jai.T2}>Analytics</Text> 
                </View>
                </TouchableOpacity> 
                </View>
                
                
                
                

            </CardView>
            </View>
        </ImageBackground>
        
    </SafeAreaView>


)
}
export default Menu;
const jai=StyleSheet.create({
    V1:{
        height:hp('15%'),
       width:wp('100%'),
       backgroundColor:'#c50504',
       alignItems:'center'
       ,borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       flexDirection:'row'
   },
   
    
    V4:{
    height:hp('19%'),
    width:wp('35%'),
    backgroundColor:'white',
    marginTop:30,
    marginLeft:20,
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
IB:{
    height:hp('110%'),
    width:wp('100%')
},
I2:{
    height:hp('10%'),
    width:wp('25%'),
    marginLeft:20,
    marginTop:10
    },
    I3:{
        height:hp('10%'),
        width:wp('20%'),
        marginLeft:25,
        marginTop:10
        },

})