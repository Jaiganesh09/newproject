import React,{useState} from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet,SafeAreaView,Button} from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import CardView from "react-native-cardview";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';


const MyMenu =({navigation})=>{

    const [total, setTotal] = useState(1);
    

    const increase = () => {
        if (total < 30) {
          setTotal(total + 1);
        }
      };
    
      const decrease = () => {
        if (total > 1) {
          setTotal(total - 1);
        }
      };

   

    const Aji=()=>{
       

        alert('Are You Confirm to Order'),
        navigation.navigate('Bottom')
    }
   

    return(
       

        <SafeAreaView style={{flex:1}}>

            <View style={jai.V1}>
            <AntDesign  size={30} name="left"  color='white' />
            <View style={{marginLeft:110}}>
            <Text style={jai.T1}>My Menu</Text>
            </View>
            </View>

            <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={15}
            style={{height:hp('22%'),width:wp('94%'),backgroundColor:'white',marginTop:40,marginLeft:10}}>

        <View style={{flexDirection:'row',marginTop:15}}>
         <Image style={{height:hp('5%'),width:wp('10%'),marginLeft:20,marginTop:10}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_wTPAsVKJJVaKn8WTyboYi4e034q6RH0AwL_sYaKyw&usqp=CAU&ec=48665699'}}>
        </Image>
        <Text style={jai.T2}>LUNCH</Text>
        <View style={jai.V2}>
        <Text style={jai.T3}>View menu</Text>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>

        <View style={jai.V3}>
        <Octicons size={30} name="dot-fill"  color='green'/>
        </View>
        <Text style={jai.T4}>₹80</Text>
        <View style={jai.V4}>
        <View style={jai.V5}>
        {/* <Button
          title="+"
          onPress={() => increase()}
        /> */}
        <View style={{marginRight:6}}>
         <AntDesign  size={30} name="minuscircle" color='#c50504' onPress={() => decrease()}/> 
         </View>
        <Text style={{color:'black'}}>{total}</Text>
        <View style={{marginLeft:6}}>
        {/* <Button
          title="-"
          onPress={() => decrease()}
        /> */}
         <AntDesign    onPress={() => increase()} size={30} name="pluscircle" color='#c50504'  /> 
        </View>
        </View>
        </View>

        </View>

    </CardView>

    <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={15}
            style={{height:hp('22%'),width:wp('94%'),backgroundColor:'white',marginTop:40,marginLeft:10}}>

        <View style={{flexDirection:'row',marginTop:15}}>
         <Image style={{height:hp('5%'),width:wp('10%'),marginLeft:20,marginTop:10}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_wTPAsVKJJVaKn8WTyboYi4e034q6RH0AwL_sYaKyw&usqp=CAU&ec=48665699'}}>
        </Image>
        <Text style={jai.T2}>LUNCH</Text>
        <View style={jai.V2}>
        <Text style={jai.T3}>View menu</Text>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>
            
        <View style={jai.V3}>
        <Octicons size={30} name="dot-fill"  color='green'/>
        </View>
        <Text style={jai.T4}>₹80</Text>
        <View style={jai.V4}>
        <View style={jai.V5}>
            <View style={{marginRight:6}}>
        <AntDesign  size={30} name="minuscircle" color='#c50504' onPress={() => decrease()}/> 
        </View>
        <Text style={{color:'black'}}>{total}</Text>
        <View style={{marginLeft:6}}>
        <AntDesign    onPress={() => increase()} size={30} name="pluscircle" color='#c50504'  /> 
        </View>
        </View>
        </View>

        </View>

    </CardView>

        <TouchableOpacity onPress={()=>Aji()}>
        <View style={{height:hp(6),width:wp(80),backgroundColor:'#c50504',marginTop:50,marginLeft:30,borderRadius:10}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'500',marginTop:5,textAlign:'center'}}>Order Now</Text>

        </View>
        </TouchableOpacity>

        </SafeAreaView>
    )
    }

export default MyMenu;

const jai=StyleSheet.create({

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
    height:hp('4%'),
    width:wp('25%'),
    backgroundColor:'green',
    borderRadius:10,
    marginLeft:70,
    marginTop:15,
    alignItems:'center',
    justifyContent:'center'
},
V3:{
    height:hp('4%'),
    width:wp('8%'),
    borderColor:'green',
    borderWidth:1,
    borderRadius:5,
    marginTop:25,
    marginLeft:20,
    alignItems:'center'
},
V4:{
    height:hp('5%'),
    width:wp('30%'),
    borderWidth:1,
    borderRadius:20,
    marginTop:20,
    marginLeft:90
},
V5:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:4,
},
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},
T2:{
    color:'black',
    fontSize:20,
    fontWeight:'500',
    marginTop:15,
    marginLeft:10
},
T3:{
    color:'white',
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
    
},
T4:{
    color:'black',
    fontSize:20,
    fontWeight:'500',
    marginTop:25,
    marginLeft:20
},
T5:{
    color:'black',
    fontSize:20,
    fontWeight:'500',
    marginLeft:4
},
})
