import React from "react";
import {SafeAreaView,View,Text}from "react-native";

const Qrscaner=()=>{

    return(
            <SafeAreaView style={{flex:1}}> 
                    <View style={{justifyContent:'center',alignItems:'center',}}>

                   
                <Text style={{fontSize:15,fontWeight:'600',color:'#000'}}>QR CODE SUCCESSFULLY</Text>
                </View>
            </SafeAreaView>
    )
}
export default Qrscaner;