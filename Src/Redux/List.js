// import React ,{useState}from "react";
// import {SafeAreaView,View,Text,TouchableOpacity,ScrollView,Image,FlatList}from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import CardView from "react-native-cardview";
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import list from '../Redux/proudcet';
// import {useDispatch, useSelector} from 'react-redux';


// const proudcetlist =[


//     {
//         _id:'001',
//         Price:'200',
//         count:'25',
//         name:'Briyani',
//         url:'https://jewelfarmer.com/wp-content/uploads/2021/05/Walnuts-500g.png'
        
//         },

//         {
//             _id:'002',
//             Price:'300',
//             count:'25',
//             name:'Briyani',
//             url:'https://jewelfarmer.com/wp-content/uploads/2021/05/Walnuts-500g.png'
            
//             },
        
            


   
  
// ] 

// const List=({navigation})=>{

//     const dispatch = useDispatch();

//     const [selcteditem,setSelecteditem]=useState(proudcetlist)
//     const [add,setAdd]=useState([])

//       const Handlewishlist=()=>{
//                 navigation.navigate('Wishlist')
//       }

//       const myCartItems = useSelector(state => state.Proudcet)

//       console.log(myCartItems)

//       const Addhandler=(item)=>{
//         // console.log(item)
//              setAdd(item)
//            dispatch(list(add));
       
//       };
     
   

//     const List1=({item})=>{
//         return(
//             // <TouchableOpacity onPress={()=>Handlelist()} activeOpacity={11}>
//             <View style={{marginTop:30,justifyContent:'center',alignItems:'center',bottom:10}}>
//             <CardView
//           cardElevation={5}
//           cardMaxElevation={5}
//           cornerRadius={15}
//             style={{height:hp('22%'),width:wp('90%'),backgroundColor:'white',}}>

//                 <View style={{flexDirection:'row'}}>

//                     <View style={{height:hp('20%'),width:wp('45%'),justifyContent:'center',alignItems:'center'}}>
//                         <Image  source={{uri:item.url}} style={{width:wp('30%'),height:hp('15%')}}/>
//                     </View>

//                     <View style={{height:hp('20%'),width:wp('45%'),}}>
//                         <View style={{flexDirection:'row'}}>
//                             <View style={{flexDirection:'column'}}>
//                         <Text style={{fontSize:15,fontWeight:'800',color:'#000',marginLeft:20,marginTop:20}}>iD {item._id}</Text>
//                         <Text style={{fontSize:15,fontWeight:'800',color:'#000',}}>Price {item.Price}</Text>
//                         </View>
//                         <AntDesign  onPress= {() => Handlewishlist()}   size={25} name="hearto" color='red'style={{marginLeft:20,marginTop:20}} />
//                         </View>
//                             <Text  style={{fontSize:15,fontWeight:'800',color:'#000',marginTop:20}}>Count:{item.count}</Text>
//                             <Text  style={{fontSize:15,fontWeight:'800',color:'#000',}}>Name: {item.name}</Text>
//                             <View style={{flexDirection:'row',marginTop:10,}}>
//                     {/* <AntDesign  size={30} name="minuscircle" color='red' onPress={() => decrease()}/> 
//                     <Text style={{color:'black',marginLeft:10,marginTop:5}}>{total}</Text>  
//                     <AntDesign    onPress={() => increase()} size={30} name="pluscircle" color='red' marginLeft={10} />  */}
//                     <TouchableOpacity onPress={()=>Addhandler(item)}>
//                     <View style={{height:hp('4'),width:wp('15'),backgroundColor:'green',marginLeft:10,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
//                         <Text style={{color:'#fff',fontSize:15}} >ADD</Text>
//                     </View>  
//                     </TouchableOpacity>               
//                     </View>
                   
//                         </View>
//             </View>
//                 </CardView>
              
//                 </View>
//                 //  </TouchableOpacity> 
    
//         )
//     }

//     return(
//             <SafeAreaView style={{flex:1}}>
                    
//                     <View style={{alignSelf:'center',marginTop:20}}>
//                     <Text style={{fontSize:18,fontWeight:'800',color:'#000'}}>List</Text>
//                 </View>


//                     <View>
//                     <FlatList
//                     data={selcteditem}
//                     renderItem={List1}
//                     // numColumns={2}
//                     showsHorizontalScrollIndicator={false}
//                     // horizontal={true} 
//                     />

//                     </View>

                  
//             </SafeAreaView>
//     )
// }

// export default List;



import {Text, View, StyleSheet,TouchableOpacity,Platform,FlatList,Image} from 'react-native';
import React, {Component,useState,useEffect} from 'react';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import colors from '../Assets/Colors';
// import Fontfamily from '../Assets/Fontfamily';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CardView from 'react-native-cardview';
import { ScrollView } from 'react-native-gesture-handler';
// import { useIsFocused } from '@react-navigation/native';
// import Loader from '../Components/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../Redux/proudcet';

 
const order = [
    {
        id: 'ODC14314244',
        title: 'Breakfast',
        //image: '19/12/2022',
        price: '300',
    },
    {
        id: 'ODC14314243',
        title: 'Lun',
        //image: '19/12/2022',
        price: '200',
    },
    {
        id: 'ODC14314245',
        title: 'Dinner',
       // image: '19/12/2022',
        price: '450',
    },
  ];

const List = ({navigation}) => {

 
  
//   const isScreenVisible =useIsFocused();
  // const [loading, setLoading] = useState(false);

  const [orderlist, setOrderlist] = useState(order);
  const [add,setAdd]=useState([]);

  const dispatch = useDispatch();

  
  const cart = useSelector((state) => state.cart1)


  const Viewcart = () => {

    navigation.navigate('Cartpage');

  };

  const addhandler = (item) => {

    //console.log(JSON.stringify(cart.cart1.length));
    setAdd(item)
    dispatch(addToCart(add))

     };

      useEffect(() => {

        console.log('Addeditems',cart);
          
      }, []);


      const back=()=>{
        navigation.goBack('');
      }

    const list_category1= ({item}) => {
         
    
            return (
            // FlatList Item
            <View >
            <TouchableOpacity>
                 <View style={styles.card}
                cardElevation={6}
                cardMaxElevation={2}
                cornerRadius={8}
                borderWidth={0.5}
                borderColor={'#000'}>

                    <View style={{flexDirection:'row',marginTop:20}}>
                    
                    <View style={{flexDirection:'row',width:wp('55%')}}>
                
                      <MaterialCommunityIcons name="order-bool-ascending" size={20} color='#000' style={{marginTop:10,marginLeft:10}} />
                       
  
                    <Text style={{fontSize:13,marginTop:10,marginLeft:10,color:'#000'}}>Order ID : </Text>
                     <Text style={{fontSize:13,marginTop:10,marginLeft:0,color:'#a9a9a9'}}>{item.id}</Text>
                     </View>
                
                      <View style={{flexDirection:'row',marginLeft:0,marginTop:10}}>
                   
                      <Text style={{fontSize:13,marginTop:0,marginLeft:5,color:'#000'}}>Name:</Text>
                     <View style={{height:25,width:wp('17%'),backgroundColor:'green',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>{item.title}</Text>
                     </View>
                     </View>

                    </View>
    
                    <View style={{flexDirection:'row',marginTop:20,marginBottom:30}}>
                     
                     <View style={{flexDirection:'row',width:wp('50%'),}}>
                     <Fontisto name="date" size={20} color='#000' style={{marginTop:0,marginLeft:10}} />
                     <Text style={{fontSize:13,marginTop:0,marginLeft:10,color:'#000'}}>Price:</Text>
                     <Text style={{fontSize:13,marginTop:0,marginLeft:5,color:'#a9a9a9'}}>{item.price}</Text>
                     </View>
                     <TouchableOpacity  onPress={() => addhandler(item)}>
                     <View style={{height:25,width:wp('17%'),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>Add</Text>
                     </View>
                     </TouchableOpacity>
                     </View>
                  
                
                     
  
                 </View>
            </TouchableOpacity>
            </View>
            );
      };


  return (
    <View style={styles.container}>
    {/* <Loader loading={loading} /> */}
      <View style={{
                width: '100%',
                height:120,
                alignItems: 'center',
                flexDirection: 'row',
                // backgroundColor:colors.Chilli,
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,}}>
              <TouchableOpacity onPress={back}>
                
                  <SimpleLineIcons
                    name="arrow-left"
                    size={24}
                    color={'#fff'}
                    style={{
                      marginLeft: 30,
                      marginTop: Platform.OS === 'android' ? 24 :5,
                    }}
                  />
                </TouchableOpacity>

                <Text style={{fontSize:20,color:'#fff',marginTop:20,marginLeft:30}}>Orders</Text>
           </View>  
               
              <ScrollView showsVerticalScrollIndicator={false}>

              <View style={{marginTop:30,marginLeft:0}}>
              <View style={{height:'auto',width:wp('90%'),backgroundColor:'#fff',marginLeft:0,marginBottom:20}}>
                         

                        <View
                          style={{
                            width: wp('95%'),
                            flexDirection: 'row',
                            height:'auto',
                            borderRadius: 5,
                            marginBottom:100
                          }}>
                       
                          <FlatList
                            vertical={true}
                            showsVerticalScrollIndicator={false}
                            data={orderlist}
                            renderItem={list_category1}
                            keyExtractor={(item, index) => index.toString()}
                          />
                        
                         
                        </View>
                        {cart.cart1.length>0?
                          ( 
                            <View
                            style={{
                              width: '100%',
                              height: 60,
                              backgroundColor: '#fff',
                              position: 'absolute',
                              bottom: 0,
                              
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'row',
                            }}>
                            <View  style={{
                              width: '90%',
                              height: 40,
                              backgroundColor:'#000',
                              borderRadius:10,
                              position: 'absolute',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'row',
                            
                            }}>
                            <Text
                            style={{
                              fontSize: 16,
                            //   fontFamily:Fontfamily.cbold,
                              color: '#fff',
                              marginLeft: 10,
                            }}>
                            {'Added Items'+'('+cart.cart1.length+')'}
                          </Text>   
                        <TouchableOpacity  onPress={() => Viewcart()}>
                     <View style={{height:25,width:wp('17%'),backgroundColor:'red',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>GoToCart</Text>
                     </View>
                     </TouchableOpacity>
                     </View>
                          </View>
                    
                          ):null}
              </View>
              </View>


                </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center'
  },
  CardDim1: {
    width: wp('90%'),
    height: 40,
    borderWidth:1,
    borderColor:'gray',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 10,
    
    borderRadius:5,
  },
  CardDark1: {
    width: wp('90%'),
    height: 40,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:5,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 10,
    
  },
  TextBlack: {
    color: 'gray',
    fontSize: 15,
    // fontFamily: Fontfamily.cbold,
  },
  TextWhite: {
    color: '#000',
    fontSize: 15,
    // fontFamily: Fontfamily.cbold,
  },
  TextBlack1: {
    color: 'gray',
    fontSize: 15,
    // fontFamily: Fontfamily.cmedium,
  },
  TextWhite1: {
    color: '#000',
    fontSize: 15,
    // fontFamily: Fontfamily.cmedium,
  },
  CardDim2: {
    width: wp('85%'),
    height: 120,
    borderWidth:1,
    borderColor:'gray',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 10,
    flexDirection:'row',
    borderRadius:5,
  },
  CardDark2: {
    width: wp('85%'),
    height: 120,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:5,
    justifyContent: 'center',
    marginLeft: 5,
    flexDirection:'row',
    marginRight: 10,
    
  },

  TextBlack2: {
    color: 'gray',
    fontSize: 17,
    // fontFamily: Fontfamily.cbold,
    
  },
  TextWhite2: {
    color: '#000',
    fontSize: 17,
    // fontFamily: Fontfamily.cbold,
    
  },
  TextBlack3: {
    color: 'gray',
    fontSize: 15,
    // fontFamily: Fontfamily.cmedium,
    marginLeft:20
  },
  TextWhite3: {
    color: '#000',
    fontSize: 15,
    // fontFamily: Fontfamily.cmedium,
    marginLeft:20
  },

  category: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 0,
    alignItems: 'center',
    marginTop:0,

  },
  category1: {
    height: 130,
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft:5,
    marginTop: 5,

  },
  card: {
    width: wp('90%'),
    height:'auto',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: Platform.OS === 'android' ? 0.5 : 0.2,
    borderColor: 'gray',
    shadowColor: '#FFA500',
    shadowOpacity: 0.2,
  },
});