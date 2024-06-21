import react,{useState} from "react";
import {SafeAreaView,View,Text,StyleSheet,FlatList,ScrollView,TouchableOpacity}from "react-native";

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CardView from "react-native-cardview";
import { Picker } from "@react-native-picker/picker";

const Yourplan=[

    {Plan:'Monthly Plan'},
  {Plan:'Weekly Plan'},
]


const Thiru=[

{
    hello:'Breakfast',
    hai:'Lunch',
    how:'Snacks',
    are:'Dinner',
    you:'Supper',
    and:'Extra Services',
    name:'sun',
    venkat:'26',
},
{
    hello1:'Breakfast',
    hai1:'Lunch',
    how:'Snacks',
    are1:'Dinner',
    you:'Supper',
    and:'Extra Services',
    name:'mon',
    venkat:'27',
},
{
    hello1:'Breakfast',
    hai1:'Lunch',
    how:'Snacks',
    are1:'Dinner',
    you:'Supper',
    and:'Extra Services',
    name:'Tue',
    venkat:'28',
},
{
    hello1:'Breakfast',
    hai1:'Lunch',
    how:'Snacks',
    are1:'Dinner',
    you:'Supper',
    and:'Extra Services',
    name:'Wed',
    venkat:'29',
},
{
    hello1:'Breakfast',
    hai1:'Lunch',
    how:'Snacks',
    are1:'Dinner',
    you:'Supper',
    and:'Extra Services',
    name:'Thu',
    venkat:'30',
},


]


const Home=({navigation})=>{

    const[data,setData]=useState(Thiru);
    const[hai,setHai]=useState('');
    const[hello,setHello]=useState('');

    const Hello=()=>{
        navigation.navigate('MyMenu')
    }

   



        const Ganesh=({item})=>{

                return(
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                        {item.hello1 === 'Breakfast'?

                        
                <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('13%'),width:wp('94%'),backgroundColor:'white',}}>

                <View style={{flexDirection:'row'}}>
                    <View style={{height:hp('13%'),width:wp('34%'),alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:hp('8%'),width:wp('15%'),backgroundColor:'red',borderRadius:10,alignItems:'center'}}>
                        <Text style={{fontSize:14,fontWeight:'600',color:'white',marginTop:10}}>{item.name}</Text>
                        <Text style={{fontSize:14,fontWeight:'600',color:'white',marginTop:10}}>{item.venkat}</Text>
                        
                      
                    </View>


                    </View>

                    <View style={{height:hp('13%'),width:wp('60%'),}}>
                    <View style={{height:hp('6%'),width:wp('60%'),marginTop:5,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.hello}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'red',marginLeft:5}}>{item.hello1}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.hai}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'red',marginLeft:5}}>{item.hai1}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.how}</Text>
                        </View>

                        <View style={{height:hp('4%'),width:wp('55%'),flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.are}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'red',marginLeft:5}}>{item.are1}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.you}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.and}</Text>
                        </View>
                        


                    </View>

                </View>

                
                

             
             

                </CardView>

:
                <CardView
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('13%'),width:wp('94%'),backgroundColor:'white',}}>

                <View style={{flexDirection:'row'}}>
                    <View style={{height:hp('13%'),width:wp('34%'),alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:hp('8%'),width:wp('15%'),backgroundColor:'black',borderRadius:10,alignItems:'center'}}>
                        <Text style={{fontSize:14,fontWeight:'600',color:'white',marginTop:10}}>{item.name}</Text>
                        <Text style={{fontSize:14,fontWeight:'600',color:'white'}}>{item.venkat}</Text>
                    </View>


                    </View>

                    <View style={{height:hp('13%'),width:wp('60%'),}}>
                    <View style={{height:hp('6%'),width:wp('60%'),marginTop:5,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.hello}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'red',marginLeft:5}}>{item.hello1}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.hai}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'red',marginLeft:5}}>{item.hai1}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.how}</Text>
                        </View>

                        <View style={{height:hp('4%'),width:wp('55%'),flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.are}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'red',marginLeft:5}}>{item.are1}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.you}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'black',marginLeft:5}}>{item.and}</Text>
                        </View>
                        


                    </View>

                </View>

                
                

             
             

                </CardView>
                }
                </View>

                )

        }


    return(
        <SafeAreaView style={{flex:1}}>
            <View style={jai.V1}>
              
            <View style={{marginLeft:15}}>
            <AntDesign  size={30} name="left"  color='white' />
            </View>
           
            <View style={{marginLeft:100}}>
            <Text style={jai.T1}>My Menu</Text>
            </View>
            </View>

            <View style={jai.V2}>
            <Text style={jai.T2}>Select your plan</Text>
            <TouchableOpacity onPress={()=>Hello()} activeOpacity={11}>
            <View style={jai.V3}>
            <Text style={jai.T3}>
            <Entypo size={22} name="chat"  color='white' marginRight='5' />
            Chat</Text>
            </View>
            </TouchableOpacity>
            </View>
            
            <View style={jai.V4}>
           <Picker style={{color:'blue',}}
           
           selectedValue={hello}
                    onValueChange={(itemValue, itemIndex) =>{
                    setHai(itemIndex)
                    setHello(itemValue)
                    }
                   }>
                   <Picker.Item style={{fontSize:17,fontWeight:'600',color:'black',marginLeft:20}}  label='Select you plan'   />    
                    {Yourplan.map((item, key)=>(
                    <Picker.Item label={item.Plan}  style={{fontSize:18,color:'black',}} value={item.Plan} key={item.Plan} />)
                   )}
           </Picker>
            </View>
            
            <View style={jai.V5}>
            <Text style={jai.T2}>January 2023</Text>
            </View>

            <ScrollView>
            <View style={{height:hp('75%')}}>
            <FlatList
                data={data}
                renderItem={Ganesh}
                // numColumns={10}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                 keyExtractor={(item, index) => index.toString()}
            
            />
            </View>
            </ScrollView>

        </SafeAreaView>

    )
}
export default Home;

const jai =StyleSheet.create({
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
        height:40,
        width:wp('100%'),
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
},
    V3:{
        height:40,
        width:wp('20%'),
        backgroundColor:'#c50504',
        marginLeft:160,
        borderWidth:1,
        borderRadius:5
    },

    V4:{
        height:hp('6%'),
        width:wp('92%'),
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        marginTop:20,
        marginLeft:10
},
    V5:{
        height:40,
        width:wp('100%'),
        marginTop:20,
        justifyContent:'center',
        marginLeft:10,
    },
    T1:{
        fontSize:20,
        fontWeight:'900',
        color:'white',
        alignItems:'center'
},
    T2:{
        fontSize:15,
        fontWeight:'900',
        color:'black'
    },
    T3:{
        fontSize:15,
        fontWeight:'800',
        color:'white',
        textAlign:'center',
        marginTop:8
    },
    T4:{
        fontSize:15,
        fontWeight:'400',
        marginLeft:5
    },

})