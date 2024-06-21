import React ,{useState}from "react";
import {SafeAreaView,View,Text,TouchableOpacity,ScrollView,Image,FlatList}from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import CardView from "react-native-cardview";
import StarRating from 'react-native-star-rating-widget';


const Loading=({navigation})=>{

    const [toggleval ,setToggleval] = useState('Loading');
    const [rating, setRating] = useState(0);


    const  handleClick = (val)=>{

        setToggleval(val)
        // console.log(val)

    }

    const Flat1=()=>{
        navigation.navigate('Vehicledetails')
    }

    const Loading =[

        {
            text:'A1234',
            text1:'EICHER',
           
        },

        {
            text:'T5487',
            text1:'TATA ACE',
           
        },
        

        
    ] 


    const loaded=[

        {
            text:'R5476',
            text1:'TATA TAURUS',
           
        },
 
    ] 

    const Wating =[

        {
            text:'R5437',
            text1:'TATA TAURUS 21 T',
           
        },

        {
            text:'R5000',
            text1:'TATA TAURUS',
           
        },
      
    ] 

    const Loading1=({item})=>{
        
        return(
                <TouchableOpacity onPress={()=>Flat1()} activeOpacity={13}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                <View style={{height:hp('14%'),width:wp('90'),backgroundColor:'#ffa500',borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
                <View style={{height:hp('10%'),width:wp('20'),backgroundColor:'#fff',justifyContent:'center',borderRadius:10,marginLeft:10,marginTop:15,}}>
                <Image source={require('../Image/Truck03.png')} style={{height:hp('10%'),width:wp('20'),borderRadius:5}} />
                </View>
                <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',}}>
                    <View style={{flexDirection:'column',}}>
                    <Text style={{fontSize:15,fontWeight:'700',color:'#fff',marginLeft:20}}>{item.text}</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#000',marginLeft:20}}>{item.text1}</Text>
                    
                        <View style={{flexDirection:'row',}}>
                           
                           <StarRating
                             rating={rating}
                             onChange={setRating}
                             starStyle={{width:10,}}
                             style={{marginLeft:14}}
                             starSize={20}
                             color="#fff"
                           />
                            <Text style={{marginLeft:13,fontSize:13,fontWeight:'600',color:'#000'}}>{rating}</Text>
                            </View> 
                    </View>
                </View>
                </View>
            </View>

            </View>
            </TouchableOpacity>
    
        )
    }

    const Loaded1=({item})=>{
        return(
            <TouchableOpacity onPress={()=>Flat1()} activeOpacity={11}> 
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                <View style={{height:hp('14%'),width:wp('90'),backgroundColor:'#25D366',borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{height:hp('10%'),width:wp('20'),backgroundColor:'#fff',justifyContent:'center',borderRadius:10,marginLeft:10,marginTop:15,}}>
                <Image source={require('../Image/Truck03.png')} style={{height:hp('10%'),width:wp('20'),borderRadius:5}} />
                </View>
                <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',}}>
                    <View style={{flexDirection:'column',}}>
                    <Text style={{fontSize:15,fontWeight:'700',color:'#fff',marginLeft:20}}>{item.text}</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#000',marginLeft:20}}>{item.text1}</Text>
                    <View style={{flexDirection:'row',}}>
                           
                           <StarRating
                             rating={rating}
                             onChange={setRating}
                             starStyle={{width:10,}}
                             style={{marginLeft:14}}
                             starSize={20}
                             color="#fff"
                           />
                            <Text style={{marginLeft:13,fontSize:13,fontWeight:'600',color:'#000'}}>{rating}</Text>
                            </View> 
                    </View>
                </View>
                </View>
            </View>

            </View>
                </TouchableOpacity>
        )
    }

    const Wating1=({item})=>{
        return(
            <TouchableOpacity onPress={()=>Flat1()} activeOpacity={11}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                <View style={{height:hp('14%'),width:wp('90'),backgroundColor:'#F78181',borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
               <View style={{height:hp('10%'),width:wp('20'),backgroundColor:'#fff',justifyContent:'center',borderRadius:10,marginLeft:10,marginTop:15,}}>
                <Image source={require('../Image/Truck03.png')} style={{height:hp('10%'),width:wp('20'),borderRadius:5}} />
                </View>
                <View style={{height:hp('15%'),width:wp('60'),justifyContent:'center',}}>
                    <View style={{flexDirection:'column',}}>
                    <Text style={{fontSize:15,fontWeight:'700',color:'#fff',marginLeft:20}}>{item.text}</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#000',marginLeft:20}}>{item.text1}</Text>
                    <View style={{flexDirection:'row',}}>
                           
                           <StarRating
                             rating={rating}
                             onChange={setRating}
                             starStyle={{width:10,}}
                             style={{marginLeft:14}}
                             starSize={20}
                             color="#fff"
                           />
                            <Text style={{marginLeft:13,fontSize:13,fontWeight:'600',color:'#000'}}>{rating}</Text>
                            </View> 
                    </View>
                </View>
                </View>
            </View>

            </View>
            </TouchableOpacity>
        )
    }
    

       
   

    return(
        <SafeAreaView style={{flex:1}}>
            
            <View style={{alignItems:'center',marginTop:20}}>
            <CardView
          cardElevation={25}
          cardMaxElevation={25}
          cornerRadius={15}
            style={{height:hp('10%'),width:wp('95%'),backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
               
            <View style={{flexDirection:'row',paddingHorizontal:25}}>
           
        <TouchableOpacity onPress={()=>handleClick('Loading')}>
        <View style={{height:37,width:wp('24%'),backgroundColor:toggleval =='Loading'?'#ffa500':'#fff',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:17,color:'black',fontWeight:'600'}}>Loading</Text>
        </View>
        </TouchableOpacity> 
       

        
        <TouchableOpacity onPress={()=>handleClick('Loaded')}>
        <View style={{height:37,width:wp('24%'),backgroundColor:toggleval =='Loaded'?'#25D366':'#Fff',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:17,color:'black',fontWeight:'600'}}>Loaded</Text>
        </View>
        </TouchableOpacity> 

       
        <TouchableOpacity onPress={()=>handleClick('Wating')}>
        <View style={{height:37,width:wp('24%'),backgroundColor:toggleval =='Wating'?'#F78181':'#Fff',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:17,color:'black',fontWeight:'600'}}>Wating</Text>
        </View>
        </TouchableOpacity> 

      
            </View>
            
            </CardView>
            </View>

            {toggleval=='Loading'&&
            
            <View >
            <FlatList
                data={Loading}
                renderItem={Loading1}
                // numColumns={2}
                showsHorizontalScrollIndicator={false}
                // horizontal={true}
                
                
                />
            </View>
            }

            {toggleval=='Loaded'&&
                    <View>
                    <FlatList
                    data={loaded}
                    renderItem={Loaded1}
                    // numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    // horizontal={true}


                    />
                    </View>
       }

{toggleval=='Wating'&&


        <View>
            <FlatList
            data={Wating}
            renderItem={Wating1}
            // numColumns={2}
            showsHorizontalScrollIndicator={false}
            // horizontal={true}


            />
            </View>
}





            
        </SafeAreaView>

    )
}
export default Loading;