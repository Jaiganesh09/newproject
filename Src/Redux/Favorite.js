import { Text, View ,StyleSheet,Button,TouchableOpacity,FlatList,Image,
    SafeAreaView,StatusBar, Platform,Modal} from 'react-native'
  import React, {useState, useCallback, useEffect, useRef} from 'react';
  import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
  import {useDispatch, useSelector} from 'react-redux';
  import Cardview from 'react-native-cardview';
  import Colors from '../Asste/Colour';
  import Fontfamily from '../Asste/Fountfamily';
  import {removeFromfav } from '../Redux/FavoriteSlice';
  
  const FavoritesScreen = () => {
  
    const[catagory,setCatagory]=useState([]);
    const dispatch = useDispatch();
  
    const myfavItems = useSelector(state => state.fav1);
  
    //console.log(myfavItems.fav1)
  
  
    const handleRemoveFromCart = (item) => {
  
      const idItem=item._id;
      console.log(idItem)
    
     // dispatch(removeFromfav(idItem));
      dispatch(removeFromfav(item._id));
    
    };
  
    const Catagory =({item})=>{
      return(
         
          <View style={{alignItems:'center',justifyContent:'center'}}>
          <Cardview style={{marginTop:10,backgroundColor:'white', height:170,width:wp('90%'),borderRadius:10,marginBottom:20,marginLeft:0,flexDirection:'row'}}
          cardElevation={4}
          cardMaxElevation={2}
          cornerRadius={10}>
         <View style={{}}>
          <Image source={{uri:item && item.vendor.image}} style={{width:wp('30%'),height:170,borderRadius:10}} />
        
  
          </View>
          <View style={{marginTop:10,paddingLeft:10}}>
  
          <View style={{flexDirection:'row',height:50}}>
          <View style={{width:wp('35%')}}>
          <Text style={{fontSize:14,fontFamily:Fontfamily.cbold,fontWeight:'bold',color:Colors.black,marginLeft:0}}>{item && item.vendor.fullName} </Text>
          </View>
          <View>
                <TouchableOpacity onPress={()=>handleRemoveFromCart(item && item.vendor)}>
                <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/128/9221/9221441.png'}}
                  style={{width: wp('5%'), height: 20, borderRadius: 10,marginLeft:30,}}
                />
                </TouchableOpacity>
          </View>
         
         </View>
  
         <View style={{flexDirection:'row'}}>
  
          <Text style={{fontSize:12,fontFamily:Fontfamily.cmedium,width:wp('50%'),marginLeft:0}}>{item && item.vendor.address}  </Text>
          
         </View>
  
          <View style={{flexDirection:'row',marginLeft:0}}>
          <View style={{width:wp('35%'),flexDirection:'row'}}>
          <Text style={{fontSize:13,fontFamily:Fontfamily.cbold,color:Colors.Chilli,marginTop:3,marginLeft:0}}>FSSAI No :</Text>
          <Text style={{fontSize:13,fontFamily:Fontfamily.cbold,marginTop:3,marginLeft:5}}>{item && item.vendor.fssai}</Text>
          </View>
        
          </View>
          <View  style={{flexDirection:'row'}}>
        
          <Text style={{fontSize:13,fontFamily:Fontfamily.cbold,}}>{item && item.vendor.cuisine}</Text>
          </View>
  
         
          </View>
          </Cardview>
          </View> 
         
      )
  }
  
  
    return (
      <View style={{flex:1,alignItems:'center',justifyContent: 'center',}}>
        <Text>Favorites</Text>
        <View style={{width:wp('100%'),marginTop:20,justifyContent:'center'}}>
              <FlatList
                  data={myfavItems.fav1}
                  renderItem={Catagory}
                  vertical={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  //numColumns={2}
              />
        </View>
      </View>
    );
  };
  
  
  
  export default FavoritesScreen