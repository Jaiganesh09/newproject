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
import {addToCart,removeItem,incrementQuantity,decrementQuantity} from './proudcet';

 
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

const Cartitem = ({navigation}) => {

 
  
  // const isScreenVisible =useIsFocused();
  const [loading, setLoading] = useState(false);

  const [orderlist, setOrderlist] = useState(order);
  const [add,setAdd]=useState([]);
  // const [cardState, setCardState] = useState(
  //   cart.length > 0 ? cart.map((item) => ({ count: 25, isEditing: false })) : null
  // );


  const dispatch = useDispatch();

  
  const cart = useSelector((state) => state.cart1)


  const Checkout = () => {
    
   // navigation.navigate('Cartitem');
   
  };

  const addhandler = (item) => {

    //console.log(JSON.stringify(cart.cart1.length));
    setAdd(item)
    dispatch(addToCart(add))

     };

     const handleRemoveFromCart = (item) => {

      const idItem=item.id;
    
      dispatch(removeItem( item.id ));
     // console.log('New Cart State:',myCartItems); 
      console.log('New Cart State:',idItem);
    
    };
    
    const increment = (item) => {

      const idItem=item.id;
      
     
    
      dispatch(incrementQuantity( item.id ));
    
    
    };

    const decrement = (item) => {

      const idItem=item.id;
    
      dispatch(decrementQuantity( item.id ));
   
    
    };

    const getPay=()=>{
      let total=0;
      cart.cart1.map(item=>{
         total=item.quantity * item.price;
         //pay= total+16.45 + 12.57;
      });
      return total.toFixed(2);;
      
    }

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
                     <TouchableOpacity  onPress={() => handleRemoveFromCart(item)}>
                     <View style={{height:25,width:wp('17%'),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>Remove</Text>
                     </View>
                     </TouchableOpacity>
                    
                    

                     </View>
                     <View style={{flexDirection:'row',marginBottom:20}}>
                     <TouchableOpacity  onPress={() => decrement(item)}>
                     <View style={{height:25,width:wp('10%'),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>-</Text>
                     </View>
                     </TouchableOpacity>
                     <Text style={{marginLeft:20,color:'#000',marginRight:20}}>{item.quantity}</Text>
                     <TouchableOpacity  onPress={() => increment(item)}>
                     <View style={{height:25,width:wp('10%'),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>+</Text>
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
                            data={cart.cart1}
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
                              // fontFamily:Fontfamily.cbold,
                              color: '#fff',
                              marginLeft: 10,
                            }}>
                              
                             ₹ {getPay()}
                          </Text>   
                        <TouchableOpacity  onPress={() => Checkout()}>
                     <View style={{height:25,width:wp('17%'),backgroundColor:'red',alignItems:'center',justifyContent:'center',marginLeft:10,borderRadius:5}}>
                     <Text style={{fontSize:13,color:'#fff'}}>Checkout</Text>
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

export default Cartitem;

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