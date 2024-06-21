import React,{useState} from "react";
import {SafeAreaView,View,Text,StyleSheet ,TextInput,ToastAndroid,TouchableOpacity}from"react-native";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";



const CreateOrder=({navigation})=>{

    const  [name,setName]=useState('');
    const  [type,setType]=useState('');
    const  [date,setDate]=useState('');
    const  [time,setTime]=useState('');
    const  [count,setCount]=useState('');
    const  [number,setNumber]=useState('');
    const  [additional,setAdditional]=useState('');
    

    const Ajith=()=>{

        if(name == "")
        {
            ToastAndroid.show('enter name ',ToastAndroid.SHORT)
        }
    
        else if(type ==""){
            ToastAndroid.show('enter type',ToastAndroid.SHORT)
        } 
        
        else if(date ==""){
            ToastAndroid.show('enter date',ToastAndroid.SHORT)
        }
        else if(time ==""){
            ToastAndroid.show('enter time',ToastAndroid.SHORT)
        }
        else if(count ==""){
            ToastAndroid.show('enter count',ToastAndroid.SHORT)
        }
        else if(number ==""){
            ToastAndroid.show('enter number',ToastAndroid.SHORT)
        }
        else if(additional ==""){
            ToastAndroid.show('enter additional',ToastAndroid.SHORT)
        }
        else{
            navigation.navigate('Special')
        }

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

        <View style={{marginTop:40}}>
            <Text style={{fontSize:18,fontWeight:'900',color:'black',marginLeft:14}}>Add Event Details!</Text>
        </View>

        <View style={jai.V2}>
        <TextInput 
        value={name}
        onChangeText={(name)=>setName(name)}
        placeholderTextColor={'black'}
        placeholder="Counatct Name"
        keyboardType="email-address"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>
        
        <View style={jai.V3}>
        <TextInput 
        value={type}
        onChangeText={(type)=>setType(type)}
        placeholderTextColor={'black'}
        placeholder="Even Type"
        keyboardType="email-address"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>

        
        <View style={jai.V3}>
        <TextInput 
        value={date}
        onChangeText={(date)=>setDate(date)}
        placeholderTextColor={'black'}
        placeholder="Even Date"
        keyboardType="email-address"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>

        
        <View style={jai.V3}>
        <TextInput 
        value={time}
        onChangeText={(time)=>setTime(time)}
        placeholderTextColor={'black'}
        placeholder="Event Time"
        keyboardType="email-address"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>

        
        <View style={jai.V3}>
        <TextInput 
        value={count}
        onChangeText={(count)=>setCount(count)}
        placeholderTextColor={'black'}
        placeholder="Total Count"
        keyboardType="email-address"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>

        
        <View style={jai.V3}>
        <TextInput 
        value={number}
        onChangeText={(number)=>setNumber(number)}
        placeholderTextColor={'black'}
        placeholder="Phone number"
       keyboardType="number-pad"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>

        
        <View style={jai.V3}>
        <TextInput 
        value={additional}
        onChangeText={(additional)=>setAdditional(additional)}
        placeholderTextColor={'black'}
        placeholder="Additional Information"
        keyboardType="email-address"
        maxLength={20}
        style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:10,justifyContent:'center'}}
        >
            
        </TextInput>
        </View>

            <TouchableOpacity onPress={()=>Ajith() }activeOpacity={11}>
        <View style={jai.V4}>
            <Text style={{fontSize:20,fontWeight:'600',textAlign:'center',color:'white'}}>SUMITE</Text>
        </View>
        </TouchableOpacity>


        </SafeAreaView>

    )
}
export default CreateOrder;

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
    height:hp('7%'),
   width:wp('95%'),
   backgroundColor:'#d8bfd8',
   marginTop:30,
   marginLeft:10,
   borderRadius:5
},
V3:{
    height:hp('7%'),
width:wp('95%'),
backgroundColor:'#d8bfd8',
marginTop:15,
marginLeft:10,
borderRadius:5
},
V4:{height:hp('7%'),
width:wp('90%'),
backgroundColor:'black',
alignItems:"center",
justifyContent:'center'
,marginLeft:20,
marginTop:30,
borderRadius:10
},
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},

})