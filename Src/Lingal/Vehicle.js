import React from "react";
import {View,Text,TouchableOpacity,ScrollView,TouchableHighlight} from 'react-native';
import{widthPercentageToDP as wp,heightPercentageToDP as hp}from'react-native-responsive-screen';
import CardView from 'react-native-cardview';
// import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Vehicledetails =({navigation})=>{

    const report=()=>{
        navigation.navigate('Viewreport')
    }

    const order=()=>{
        navigation.navigate('Vieworder')
    }

    const scan=()=>{
      navigation.navigate('Scanpage')
   }
  
    return(
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            
              
            <View style={{width:wp('100%'),alignItems:'center',justifyContent:'center',paddingVertical:15}}>
              <View style={{width:wp('90%'),alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>Vehicledetails</Text>
            </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{width:wp('100%'),alignItems:'center',justifyContent:'center'}}>
            <CardView
            cardElevation={5}
            cardMaxElevation={5}
            cornerRadius={15}
            style={{backgroundColor:'#EBEDEF',width:wp('90%'),alignItems:'center',marginBottom:30,marginTop:10}}>
              
                <View style={{width:wp('90%'),height:120,flexDirection:'row'}}>
                <View style={{width:wp('30%'),height:120,alignItems:'center',justifyContent:'center',}}>
                <View style={{backgroundColor:'white',width:wp('26%'),height:75,alignItems:'center',justifyContent:'center',borderRadius:10}}>
{/* 
                    <LottieView
                        source={require('../Gifimage/truck1.json')}
                        autoPlay
                        style={{height:55,width:wp('25%'),}}
                        loop={true}
                        speed={0.3}
                        /> */}

                </View>
                </View>

                <View style={{width:wp('35%'),height:120,alignItems:'center',justifyContent:'center',}}>
                <View style={{width:wp('35%'),height:120,justifyContent:'center',}}>
                <Text style={{fontSize:18,fontWeight:'700',color:'black',paddingLeft:15}}>A1234</Text>
                <Text style={{fontSize:17,fontWeight:'400',color:'black',paddingLeft:15}}>EICHER 19</Text>
                {/* <View style={{justifyContent:'center',width:wp('23%'),marginLeft:15,marginTop:5}}>
                    <View style={{backgroundColor:'#64E986',paddingVertical:3,borderColor:'black',borderWidth:1,borderRadius:6,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#151B54',paddingHorizontal:10,}}>Loaded</Text>
                    </View>
                </View> */}
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                              <View style={{width:wp('7%'),alignItems:'center',}}>
                        <Octicons style={{}} name="dot-fill" size={26} color={'green'}/>
                        </View>
                        <View style={{width:wp('21%'),justifyContent:'center',}}>
                        <Text style={{fontSize:13,color:'black',fontWeight:'500'}}>Loaded</Text>
                        </View>
                        </View>

                </View>
                </View>

                <View style={{width:wp('25%'),alignItems:'center',justifyContent:'center'}}>
                  <TouchableOpacity onPress={()=>scan()}activeOpacity={7}>
                <MaterialCommunityIcons name="qrcode-scan" size={50} color={'#151B54'}/>
                <Text style={{fontSize:16,color:'black',paddingTop:5,fontWeight:'500'}}>Scan QR</Text>
                </TouchableOpacity>
                </View>
                </View>

                <View style={{width:wp('90%'),alignItems:'center',justifyContent:'center',marginTop:20}}>
                <Text style={{fontSize:14,color:'black',paddingLeft:9,lineHeight:19,fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                </View>

                <View style={{width:wp('90%'),flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}>
                <View style={{width:wp('45%'),}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',paddingLeft:9}}>From:</Text>
                </View>

                <View style={{width:wp('45%'),}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',paddingLeft:9}}>To:</Text>
                </View>
                </View>

                <View style={{width:wp('90%'),flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:25}}>
                <View style={{width:wp('45%'),}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',paddingLeft:9}}>Date:</Text>
                </View>

                <View style={{width:wp('45%'),}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',paddingLeft:9}}>Date:</Text>
                </View>
                </View>

                <View style={{width:wp('90%'),flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:25}}>
                <View style={{width:wp('45%'),}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',paddingLeft:9}}>Time:</Text>
                </View>

                <View style={{width:wp('45%'),}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',paddingLeft:9}}>Time:</Text>
                </View>
                </View>

                
                <View style={{width:wp('90%'),alignItems:'center',justifyContent:'center',marginTop:30}}>
                <Text style={{fontSize:14,color:'black',paddingLeft:9,lineHeight:19,fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                </View>

                <View style={{width:wp('90%'),alignItems:'center',justifyContent:'center',marginTop:50}}>
                <TouchableHighlight style={{borderRadius:7}} underlayColor={'#70aab7'} activeOpacity={0.2} onPress={()=>order()} >
              <View style={{width:wp('80%'),backgroundColor:'#076d7d',alignItems:'center',justifyContent:'center',paddingVertical:8,borderRadius:7}}>
                <Text style={{color:'white',fontSize:17,fontWeight:'600'}}>View Orders</Text>
                </View>
                </TouchableHighlight>
              </View>

              <View style={{width:wp('90%'),alignItems:'center',justifyContent:'center',marginTop:30,marginBottom:120}}>
                <TouchableHighlight style={{borderRadius:7}} underlayColor={'#70aab7'} activeOpacity={0.2} onPress={()=>report()}>
              <View style={{width:wp('80%'),backgroundColor:'#076d7d',alignItems:'center',justifyContent:'center',paddingVertical:8,borderRadius:7}}>
                <Text style={{color:'white',fontSize:17,fontWeight:'600'}}>View Reports</Text>
                </View>
                </TouchableHighlight>
              </View>


            </CardView>
            </View>
            
            </ScrollView>

        </View>
    )
}
export default Vehicledetails;
