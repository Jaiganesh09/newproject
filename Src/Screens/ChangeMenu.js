import react ,{useState}from "react";
import {SafeAreaView,Text,StyleSheet,View,FlatList,TouchableOpacity,Image,ScrollView}from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import Cardview from "react-native-cardview"

const Hai=[
    {
        name:'My Order',
    },
    {
        name:'Cancelled Order',
    },
]
const Thiru=[
    {
    sum:require('../Image/cont.png'),asdf1:'OrderID:',asdf2:'#0001',asdf3:'Ordered Date : 19/12/2022',
    sum1:require('../Image/break.png'),asdf4:'Breakfast',asdf5:'Service Date : 10/01/2023',
    sum3:require('../Image/count.png'),asdf6:'Count:28',
    },
    {
    sum:require('../Image/cont.png'),asdf1:'OrderID:',asdf2:'#0002',asdf3:'Ordered Date : 20/12/2022',
    sum1:require('../Image/break.png'),asdf4:'Breakfast',asdf5:'Service Date : 19/01/2023',
    sum3:require('../Image/count.png'),asdf6:'Count:100',
    },
    {
    sum:require('../Image/cont.png'),asdf1:'OrderID:',asdf2:'#0003',asdf3:'Ordered Date : 29/12/2022',
    sum1:require('../Image/break.png'),asdf4:'Breakfast',asdf5:'Service Date : 20/01/2023',
    sum3:require('../Image/count.png'),asdf6:'Count:150',
    },
    {
    sum:require('../Image/cont.png'),asdf1:'OrderID:',asdf2:'#0004',asdf3:'Ordered Date : 35/12/2022',
    sum1:require('../Image/break.png'),asdf4:'Breakfast',asdf5:'Service Date : 25/01/2023',
    sum3:require('../Image/count.png'),asdf6:'Count:200',
    },
]
const Venkat=[
    {
    sum:require('../Image/cont.png'),asdf1:'OrderID:',asdf2:'#0001',asdf3:'Ordered Date : 19/12/2022',
    sum1:require('../Image/break.png'),asdf4:'Breakfast',asdf5:'Service Date : 10/01/2023',
    sum3:require('../Image/count.png'),asdf6:'Count:28',
    },
    
]

const CancelOrder=()=>{

    const[data,setData]=useState('My Order');

    const Click=(value,index)=>{
        setData(value.name)
}

const MyOrder=({item})=>{

    return(

        <View>
        <Cardview
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('21%'),width:wp('94%'),backgroundColor:'white',marginTop:10,marginLeft:10,}}>
                <View style={{height:hp('21%'),width:wp('94%'),backgroundColor:'white',borderWidth:1,borderRadius:5}}>

                    <View style={jai.V2}>
                    <Image source={item.sum}  style={jai.I1}/>
                    <Text style={jai.T2}>{item.asdf1}</Text>
                    <View style={jai.V3}>
                        <Text style={jai.T3}>{item.asdf2}</Text>
                    </View>
                    <Text style={jai.T4}>{item.asdf3}</Text>
                    </View>
                    <View style={jai.V4}>
                    <Image source={item.sum1} style={jai.I2}/>
                    <Text style={jai.T5}>{item.asdf4}</Text>
                    <Text style={jai.T6}>{item.asdf5}</Text>
                    </View>
                    <View style={jai.V6}>
                    <Image source={item.sum3} style={jai.I3}/>
                    <Text style={jai.T7}>{item.asdf6}</Text>   
                    </View>

                </View>

            </Cardview>
        </View>
        
    )
 }
 const Cancel=({item})=>{

    return(

        <View>
        <Cardview
                cardElevation={15}
                 cardMaxElevation={15}
                cornerRadius={5}
            style={{height:hp('21%'),width:wp('94%'),backgroundColor:'white',marginTop:10,marginLeft:10,}}>
                <View style={{height:hp('21%'),width:wp('94%'),backgroundColor:'white',borderWidth:1,borderRadius:5}}>

                    <View style={jai.V2}>
                    <Image source={item.sum}  style={jai.I1}/>
                    <Text style={jai.T2}>{item.asdf1}</Text>
                    <View style={jai.V09}>
                        <Text style={jai.T3}>{item.asdf2}</Text>
                    </View>
                    <Text style={jai.T4}>{item.asdf3}</Text>
                    </View>
                    <View style={jai.V4}>
                    <Image source={item.sum1} style={jai.I2}/>
                    <Text style={jai.T5}>{item.asdf4}</Text>
                    <Text style={jai.T6}>{item.asdf5}</Text>
                    </View>
                    <View style={jai.V6}>
                    <Image source={item.sum3} style={jai.I3}/>
                    <Text style={jai.T7}>{item.asdf6}</Text>   
                    </View>

                </View>

            </Cardview>
        </View>
        
    )
 }

    return(
        <SafeAreaView>
           <View style={jai.V1}>
            <Text style={jai.T1}>My Menu</Text>
            </View>

            
            <View style={{height:80,width:wp('96%'),}}>
                  <FlatList
                    data={Hai}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem={({item,index})=>{
                      return(
                        <TouchableOpacity onPress={()=>Click(item,index)} activeOpacity={11}>
                        <View style={data == item.name ? {height:45,width:wp('35%'),backgroundColor:'#c50504',
                        marginTop:20,borderRadius:7,alignItems:'center',justifyContent:'center',marginLeft:40}
                        :
                        {height:45,width:wp('35%'),backgroundColor:'#2E1A47',
                        marginTop:20,borderRadius:7,alignItems:'center',justifyContent:'center',marginLeft:40}
                        }>
                        <Text style={{fontSize:18,color:'white',}}>{item.name}</Text>
                        

                        </View>
                     
                        </TouchableOpacity>
                      )
                    }}
                    
                    
                    />
                    </View>

                   
                    <View>
                        
                        {data==='My Order' ?
                        
                    <FlatList
                    data={Thiru}
                    renderItem={MyOrder}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item,index)=> index.toString()}
                
                />
              

                :
                    <FlatList
                    data={Venkat}
                    renderItem={Cancel}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item,index)=> index.toString()}
                
                />
            }
            </View>
          

        </SafeAreaView>

    )
}
export default CancelOrder;

const jai=StyleSheet.create({

    V1:{
        height:hp('13%'),
       width:wp('100%'),
       backgroundColor:'#c50504',
       alignItems:'center',
       borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       justifyContent:'center',
   },
   V2:{
    height:hp('7%'),
    width:wp('94%'),
    flexDirection:'row',
    alignItems:'center',
},
V3:{
    height:hp('4%'),
    width:wp('12%'),
    backgroundColor:'#ffff00',
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center'
},
V09:{
    height:hp('4%'),
    width:wp('12%'),
    backgroundColor:'#c50504',
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center'
},
V4:{
    height:hp('7%'),
    width:wp('94%'),
    flexDirection:'row',
    alignItems:'center',
},
V6:{
    height:hp('7%'),
    width:wp('94%'),
    flexDirection:'row',
    alignItems:'center'
},
   T1:{
    fontSize:20,
    fontWeight:'900',
    color:'white',
    alignItems:'center'
},
T2:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
    marginLeft:5
},
T3:{
    fontSize:13,
    fontWeight:'bold',
    color:'black'
},
T4:{
    fontSize:15,
    fontWeight:'bold',
    color:'black' ,
    marginLeft:18
},
T5:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
    marginLeft:5,
},
T6:{
    fontSize:15,
    fontWeight:'bold',
    color:'black' ,
    marginLeft:60
},
T7:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
    marginLeft:5,
},
I1:{
    height:hp('6.5%'),
    width:wp('10%'),
    marginLeft:5
},
I2:{
    height:hp('7%'),
    width:wp('10%'),
    marginLeft:5
},
I3:{
    height:hp('4%'),
    width:wp('10%'),
    marginLeft:9
},
})