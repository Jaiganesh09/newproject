import React,{ useState, useRef, useEffect, createRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
    ToastAndroid,
    FlatList,
    SafeAreaView,
} from 'react-native';
// import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage'
import Fontfamily from '../Asste/Fountfamily';
import Colors from '../Asste/Colour';
// import Loader from '../../components/Loader';
import base64 from 'react-native-base64';
import RazorpayCheckout from 'react-native-razorpay';
import CardView from 'react-native-cardview';
// import { PlanList } from '../Home/HomeService';
// import Toast from 'react-native-simple-toast';



const hello=[
  {
    id:'001',
    plan:'1 Month',
    year:'2 Years',
    price:'300',
  },
  {
    plan:'1 Month',
    year:'2 Years',
    price:'500',
  },
  {
    plan:'1 Month',
    year:'2 Years',
    price:'400',
  },
  {
    plan:'1 Month',
    year:'2 Years',
    price:'300',
  },
]

const PaymentPlan = ({ navigation }) => {
    
    const [id, setId] = useState();
    const [loading, setLoading] = useState(false);
    const [planData, setPlanData] = useState([])
    
    useEffect(() => {
      AsyncStorage.getItem('id').then(value =>
        {
           setId(value)
        });
        // PlanList(plancallback)
      }, [])

      const back=(value)=>{
        navigation.goBack()
       }

      const plancallback = ({data}) =>{
        setLoading(false)
        //alert(JSON.stringify(data.items)) 
        setPlanData(data.items)    
       }
       
      const pay=(amount,id,year)=>{
        setLoading(true)
        
        let formData = new FormData()
            formData.append("amount", parseInt(amount*100))
            formData.append("currency", 'INR')
            formData.append("receipt", "Receipt no. 1")
            formData.append("payment_capture", 1)
  
        //making data to send on server
        var headers = new Headers();
         headers.append("Authorization", "Basic " + base64.encode(""));
        //POST request
        fetch('https://api.razorpay.com/v1/orders', {
          method: 'POST', //Request Type
          body: formData, //post body
          headers: headers,
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
            setLoading(false)
            //alert(JSON.stringify(responseJson.amount));
            payId(responseJson.id,responseJson.amount,id,year)
            console.log(responseJson);
          })
          //If response is not in json then in error
          .catch((error) => {
            setLoading(false)
            alert(JSON.stringify(error));
            console.error(error);
          });
        
        
      }

      const payId = (amount1) => {
        var options = {
          description: "subscription",
          image: 'https://jeevaamirdham.org/uploads/images/2021/07/image_750x_610240bb55a89.jpg',
          currency: 'INR',
          key: 'rzp_test_xkiQ12Akkv1PA7',
          amount: parseInt(amount1*100),
          name: 'Jeevaamirdham',
          // order_id: id,Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
          prefill:
           {
            email: 'jeevaamirdham@gmail.com',
            contact: '9857614550',
            name: 'username'
          },
          theme: {color: '#53a20e'}
        }
        RazorpayCheckout.open(options).then((data) => {

          // use alert here

          // handle success
         // userpay(data.razorpay_payment_id,amount1,pid,year)
          //ToastAndroid.show(data.razorpay_payment_id,ToastAndroid.SHORT);

        }).catch((error) => {

          // Toast.show('Payment Cancelled',Toast.SHORT);

        });
        
      };

      const userpay=(payid,amount1,pid,year)=>{
        //alert(value.year)
        setLoading(true)
        var body = new FormData();
        body.append('user_id',id)
        body.append('product_id',pid)
        body.append('payment_id',payid)
        body.append('amount',parseInt(amount1/100))
        body.append('years',year)
        //alert(id+" "+pid+" "+payid+" "+amount1+" "+year)
        fetch('https://jeevaamirdham.org/API/api/ApiController/user_payment', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          body: body,
         })
         .then(response => response.json())
         .then(data => {
           // axios
           //   .post('https://jeevaamirdham.org/API/api/ApiController/user_payment', body)
           //   .then(function (response) {
            // handle success
            setLoading(false)
            // alert(JSON.stringify(response.data));
            if(data.items=="Successfully Inserted"){
              Toast.show("Your plan is activated", Toast.LONG)
              navigation.goBack('')
            }else{
              Toast.show("Try again", Toast.LONG)
            }
          })
          .catch(function (error) {
            // handle error
            setLoading(false)
            Toast.show("Try again", Toast.LONG)
            //alert(error.message);
          });
        
      }

      const planview = ({item}) => {
        return (
          // FlatList Item
              <View>
              <TouchableOpacity activeOpacity={11} onPress={() => payId(item.price,)}>
                
              <View style={{width: wp('95%'),backgroundColor:Colors.white,
              borderRadius:8,shadowColor: '#000',margin:8,
              shadowOffset: { width: 0, height: 1 },shadowOpacity:0.22,shadowRadius: 2.22,
              elevation:4,paddingVertical:8,paddingStart:8}}>
             <Text style={{ color: Colors.black,fontFamily:Fontfamily.cregular,fontSize:16}}>{item.plan}</Text>

             <View style={{width: wp('95%'),flexDirection:'row',justifyContent:'space-between',
             alignItems:'center',marginTop:6}}>
             <Text style={{ color: Colors.logoColor,fontWeight:'500',fontSize:15,paddingHorizontal:3}}>Rs {item.price}</Text>
             <Text style={{ color: Colors.black,fontWeight:'500',fontSize:15,marginRight:15}}>{item.year} <Text style={{color:'#000'}}>year plan</Text></Text>
             </View> 

             </View> 

             </TouchableOpacity>
            </View>
        );
      };

    return (
        
            <SafeAreaView style={{flex: 1,backgroundColor: Colors.white,alignItems: 'center'}}>
            <StatusBar backgroundColor={Colors.statusbarColor} barStyle="dark-content" />
            {/* <Loader loading={loading} /> */}
            
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={{width: wp('100%'),alignItems:'center'}}>

      
            <View style={{width: wp('80%'),alignItems: 'center',marginTop:20}}>
            <Text style={{ color: Colors.logoColor,fontSize:20,fontFamily: Fontfamily.poppinsregular}}>Plans</Text>
            </View>

             <View style={{width: wp('100%'),alignItems:'center',marginBottom:20}}>
               <FlatList
               data={hello}
               renderItem={planview}
               keyExtractor={(item, index) => index.toString()}
               />
             </View>

            </View>
            {/* </ScrollView> */}
            
            
        </SafeAreaView>
    );
};
export default PaymentPlan;

const styles = StyleSheet.create({

    bottomView:{
        width: '100%',  
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom:15
      },

})