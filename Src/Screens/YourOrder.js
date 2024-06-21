import React from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity}from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import StepIndicator from 'react-native-step-indicator';
import Fontfamily from "../Asste/Fountfamily";


 

const [currentPage, setCurrentPage] =('');

const YourOrder=({navigation})=>{

    const Icon=()=>{
        navigation.navigate('OrderID')
    }

    const stepIndicatorStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#aaaaaa',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#aaaaaa',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#aaaaaa',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#c60800',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#c60800',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#000',
        labelSize: 15,
        currentStepLabelColor: '#c60800',
        borderRadiusSize: 10,
        fontWeight: 'bold',
        fontFamily: Fontfamily.cbold,
      };

      const data = [
        {
          title: 'Order Approved',
        },
        {
          title: 'Raw material Purchased',
        },
        {
          title: 'Production started',
        },
        {
          title: 'Production Done',
        },
        {
          title: 'COVID check Done',
        },
        {
          title: 'RE/KM Checking',
        },
        {
          title: 'Hogist Delivery challan',
        },
        {
          title: 'Food is Dispatched',
        },
        {
          title: 'Food is Delivered',
        },
      ];
    
    

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <View style={jai.V1}>
                <TouchableOpacity onPress={()=>Icon()}activeOpacity={11}>
                <View style={{marginLeft:15}}>
            <AntDesign  size={30} name="left"  color='white' />
            </View>
            </TouchableOpacity>
            <View style={{marginLeft:80}}>
            <Text style={jai.T1}>Order ID: #0001</Text>
            </View>
            </View>

            <View style={{width:wp('100%'),borderWidth:0.2,borderColor:'black',marginTop:10}}>
                </View>

            
          
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontFamily: Fontfamily.cbold,
              marginLeft: 20,
              marginTop: 20,
            }}>
            Your order status
          </Text>

          <View style={jai.container}>
            <View style={jai.stepIndicator}>
              <StepIndicator
                customStyles={stepIndicatorStyles}
                stepCount={8}
                direction="vertical"
                currentPosition={currentPage}
                labels={data.map(item => item.title)}
              />
            </View>

            <View
              style={{
                width: wp('45%'),
                backgroundColor: '#fff',
                height: 30,
                marginLeft: 10,
              }}>
              <View
                style={{
                  width: wp('25%'),
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  borderRadius: 5,
                  marginTop: 70,
                }}>
           
              </View>
              <View
                style={{
                  width: wp('25%'),
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  borderRadius: 5,
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'green',
                    fontFamily: Fontfamily.cbold,
                    marginLeft: 0,
                  }}>
                   {/* {item.count} */}
                </Text>
              </View>
              <View
                style={{
                  width: wp('25%'),
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  borderRadius: 5,
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'green',
                    fontFamily: Fontfamily.cbold,
                    marginLeft: 0,
                  }}>
                   {/* {item.count} */}
                </Text>
              </View>
              <View
                style={{
                  width: wp('25%'),
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  borderRadius: 5,
                  marginTop: 40,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'green',
                    fontFamily: Fontfamily.cbold,
                    marginLeft: 0,
                  }}>
                  {/* {item.count} */}
                </Text>
              </View>
              <View
                style={{
                  width: wp('25%'),
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  borderRadius: 5,
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'green',
                    fontFamily: Fontfamily.cbold,
                    marginLeft: 0,
                  }}>
                    {/* {item.count} */}
                </Text>
              </View>
              <TouchableOpacity >
                <View
                  style={{
                    width: wp('26%'),
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 0,
                    borderRadius: 5,
                    marginTop: 30,
                    borderWidth: 1,
                    borderColor: '#000',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontFamily: Fontfamily.cbold,
                      marginLeft: 0,
                    }}>
                     {/* {item.count} */}
                    {/* View DC */}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View
                  style={{
                    width: wp('30%'),
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 0,
                    borderRadius: 5,
                    marginTop: 30,
                    borderWidth: 1,
                    borderColor: '#000',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontFamily: Fontfamily.cbold,
                      marginLeft: 0,
                    }}>
                    {/* Live Location */}
                    {/* {item.count} */}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: wp('25%'),
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  borderRadius: 5,
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#c60800',
                    fontFamily: Fontfamily.cbold,
                    marginLeft: 0,
                  }}>
                  {/* {item.count} */}
                </Text>
              </View>
            </View>
           
          </View>
        
      
      

        </SafeAreaView>

    )
}
export default YourOrder;
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
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},
container: {
    height: 650,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  
    
  },
  
  stepIndicator: {
    marginVertical: 35,
    paddingHorizontal: 10,

  },
})