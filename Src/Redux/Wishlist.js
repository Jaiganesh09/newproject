import React ,{useState}from "react";
import {SafeAreaView,View,Text,TouchableOpacity,ScrollView,Image,FlatList}from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import CardView from "react-native-cardview";
import AntDesign from 'react-native-vector-icons/AntDesign';
import list from '../Redux/proudcet';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ToastAndroid } from "react-native";


const proudcetlist =[


    {
        _id:'001',
        Price:'200',
        count:'25',
        name:'Briyani',
        url:'https://jewelfarmer.com/wp-content/uploads/2021/05/Walnuts-500g.png'
        
        },

        {
            _id:'002',
            Price:'300',
            count:'25',
            name:'Briyani',
            url:'https://jewelfarmer.com/wp-content/uploads/2021/05/Walnuts-500g.png'
            
            },
        
            


   
  
] 

const List=({navigation})=>{

    

    const [selcteditem,setSelecteditem]=useState(proudcetlist)
    const [isLiked, setIsLiked] = useState(false)
   

    const handleLike = (item) => {
        setIsLiked(!isLiked);
        if (isLiked === false) {
          if (Platform.OS === 'android') {
            ToastAndroid.show(
              'your product added to faviorite list!',
              ToastAndroid.SHORT,
            );
          } else {
            alert('your product added to faviorite list!');
          }
          //alert(JSON.stringify(item))
        //   dispatch(addProductToMyfav(item));
    
        } else {
          if (Platform.OS === 'android') {
            ToastAndroid.show(
              'your product removed from faviorite list!',
              ToastAndroid.SHORT,
            );
          } else {
            alert('your product removed from faviorite list!');
          }
        //   dispatch(removeFromfav(item._id));
        }
      };
      
     
   

    const List1=({item})=>{
        return(
            // <TouchableOpacity onPress={()=>Handlelist()} activeOpacity={11}>
            <View style={{marginTop:30,justifyContent:'center',alignItems:'center',bottom:10}}>
            <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={15}
            style={{height:hp('22%'),width:wp('90%'),backgroundColor:'gray',}}>

                <View style={{flexDirection:'row'}}>

                    <View style={{height:hp('20%'),width:wp('45%'),justifyContent:'center',alignItems:'center'}}>
                        <Image  source={{uri:item.url}} style={{width:wp('30%'),height:hp('15%')}}/>
                    </View>

                    <View style={{height:hp('20%'),width:wp('45%'),}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:15,fontWeight:'800',color:'#000',marginLeft:20,marginTop:20}}>iD {item._id}</Text>
                        <Text style={{fontSize:15,fontWeight:'800',color:'#000',}}>Price {item.Price}</Text>
                        </View>
                        <View style={{marginTop:20,marginLeft:30}}>
                        <TouchableOpacity onPress={()=>handleLike(item)}>
                <Ionicons
                  name={isLiked ? 'heart' : 'heart-outline'}
                  size={30}
                  color={isLiked ? 'red' : 'white'}
                />
              </TouchableOpacity>
              </View>
                        </View>
                            <Text  style={{fontSize:15,fontWeight:'800',color:'#000',marginTop:20}}>Count:{item.count}</Text>
                            <Text  style={{fontSize:15,fontWeight:'800',color:'#000',}}>Name: {item.name}</Text>
                            <View style={{flexDirection:'row',marginTop:10,}}>
                    {/* <TouchableOpacity onPress={()=>Addhandler()}> */}
                    <View style={{height:hp('4'),width:wp('15'),backgroundColor:'green',marginLeft:10,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontSize:15}} >ADD</Text>
                    </View>  
                    {/* </TouchableOpacity>                */}
                    </View>
                   
                        </View>
            </View>
                </CardView>
              
                </View>
                //  </TouchableOpacity> 
    
        )
    }

    return(
            <SafeAreaView style={{flex:1}}>
                    
                    <View style={{alignSelf:'center',marginTop:20}}>
                    <Text style={{fontSize:18,fontWeight:'800',color:'#000'}}>List</Text>
                </View>


                    <View>
                    <FlatList
                    data={selcteditem}
                    renderItem={List1}
                    showsHorizontalScrollIndicator={false}
                    />

                    </View>

                  
            </SafeAreaView>
    )
}

export default List;