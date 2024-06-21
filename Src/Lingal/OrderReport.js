import React,{useState} from "react";
import {SafeAreaView,View,Text,TouchableOpacity,FlatList,Image,ScrollView,TouchableHighlight} from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

const OrderReport=()=>{

    const [toggleval ,setToggleval] = useState('Order');


    const  handleClick = (val)=>{

        setToggleval(val)
        // console.log(val)

    }

    const Order=[
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },

        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        {
            text:'A1234',
            text1:'From:',
            text2:'To:',
            text3:'Date:',
            text4:'Time:',
           
        },
        
 
    ] 
    const Report=[
       
       
        
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Item :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Item :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Item :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Item :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Itemnumber :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Itemnumber :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
         {
            Number:'A1234',
            Vechicle:'Vechicle',
            Postion:'Postion',
            Item:'Item',
            Vechiclenumber:'T5487',
            Postionnumber:'Old W2',
            Itemnumber :'Ap 101',
            Tata:'Tata ACE',
            Category:'Category',
            Status:' Status',
            Categoryperofile:'Perofile',
            Statusnumber:'[UNLOADED]',
         },
        

      
    ] 

    const Order1=({item})=>{
        return(
                <View>
            
                
            <View style={{justifyContent:'center',alignItems:'center',marginTop:15,marginBottom:10}}>
                <View style={{height:hp('15%'),width:wp('90'),backgroundColor:'#add8e6',borderRadius:10}}>
                   
                
                <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',marginLeft:20}}>
                    <View style={{flexDirection:'column',}}>
                    <Text style={{fontSize:15,fontWeight:'700',color:'#fff'}}>{item.text}</Text>

                    </View>
                    <View style={{height:hp('8%'),width:wp('80%'),flexDirection:'row',}}>
                                <View style={{height:hp('8%'),width:wp('40%'),flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.text1}</Text>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.text2}</Text>
                        </View>
                        <View style={{height:hp('8%'),width:wp('40%'),flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.text3}</Text>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.text4}</Text>
                        </View>
                        </View>
                </View>
              
            </View>

            </View>

        </View>

           
    
        )
    }

    const Report1=({item})=>{
        return(
           
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20,}}>
                <View style={{height:hp('15%'),width:wp('90'),backgroundColor:'#add8e6',borderRadius:10,bottom:10}}>
                   
                
                <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',marginLeft:20}}>
                    <View style={{flexDirection:'column',}}>
                    <Text style={{fontSize:15,fontWeight:'700',color:'#fff'}}>{item.Number}</Text>

                    </View>
                    <View style={{height:hp('8%'),width:wp('80%'),flexDirection:'row',}}>
                                <View style={{height:hp('8%'),width:wp('40%'),flexDirection:'column',justifyContent:'center'}}>

                         <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.Vechicle}</Text>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000000',marginLeft:5,marginTop:2}}>{item.Vechiclenumber}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.Postion}</Text>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000000',marginLeft:5,marginTop:2}}>{item.Postionnumber}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.Item}</Text>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000000',marginLeft:5,marginTop:2}}>{item.Itemnumber}</Text>
                        </View>

                        </View>


                        <View style={{height:hp('8%'),width:wp('40%'),flexDirection:'column',justifyContent:'center'}}>

                          <View style={{flexDirection:'row'}}>
                        {/* <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>Vehicle:</Text> */}
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000000',}}>{item.Tata}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.Category}</Text>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000000',marginLeft:5,marginTop:2}}>{item.Categoryperofile}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,fontWeight:'700',color:'#000000'}}>{item.Status}</Text>
                        <Text style={{fontSize:13,fontWeight:'400',color:'#000000',marginLeft:5,marginTop:2}}>{item.Statusnumber}</Text>
                        </View>

                        </View>
                        </View>
                </View>
              
            </View>

            </View>
    
        )
    }

    return(
                <SafeAreaView style={{flex:1}}>


            <View style={{flexDirection:'row',marginLeft:10}}>

            <TouchableOpacity onPress={()=>handleClick('Order')}activeOpacity={11}>
            <View style={{height:45,width:wp('42%'),backgroundColor:toggleval=='Order'?'#add8e6':'#fff',
          marginTop:20,borderRadius:7,alignItems:'center',justifyContent:'center',marginLeft:16}}>
            <Text style={{fontSize:18,color:'#000'}}>Order</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>handleClick('Report')}activeOpacity={11}>
          <View style={{height:45,width:wp('42%'),backgroundColor:toggleval=='Report'?'#add8e6':'#fff',
          marginTop:20,borderRadius:7,alignItems:'center',justifyContent:'center',marginLeft:16}}>
            <Text style={{fontSize:18,color:'#000'}}>Report</Text>
          </View>
          </TouchableOpacity>
          </View>

           

             { toggleval=='Order'&&
                      <View >
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <View style={{height:hp('15%'),width:wp('90'),backgroundColor:'#ffa500',borderRadius:10}}>
                <View style={{flexDirection:'row'}}>
            <View style={{height:hp('13%'),width:wp('30'),marginTop:7,backgroundColor:'#fff',justifyContent:'center',borderRadius:10,marginLeft:10}}>
            <Image source={require('../Image/Truck03.png')} style={{height:hp('11%'),width:wp('30')}} />
            </View>
            <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',marginLeft:20}}>
                <View style={{flexDirection:'column',}}>
                <Text style={{fontSize:15,fontWeight:'700',color:'#fff'}}>A2233</Text>
                <Text style={{fontSize:12,fontWeight:'500',color:'#000'}}>EICHER</Text>
                </View>
            </View>
            </View>
        </View>

        </View>


        <View style={{padding:20}}>
            <Text style={{fontSize:20,fontWeight:'800',color:'#000'}}>Order History</Text>
        </View>
                        <FlatList
                data={Order}
                renderItem={Order1}
                Vertical={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                />
               
                        </View>
                        }


                        {
                          toggleval=='Report'&&

                          <View style={{marginBottom:80}}>

                        <FlatList
                data={Report}
                renderItem={Report1}
                showsVerticalScrollIndicator={false}
                Vertical={true}
                keyExtractor={(item, index) => index.toString()}
                />
               
                            </View>
                        }



            </SafeAreaView>

    )
}
export default OrderReport;




