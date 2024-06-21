import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../Asste/Colour';
import Fontfamily from '../Asste/Fountfamily';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../Screens/Home';
import ChangeMenu from "../Screens/ChangeMenu";
import CancelOrder from '../Screens/CancelOrder';
import OrderStatus from '../Screens/OrderStatus';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App({}) {

  return (

    <Tab.Navigator
    initialRouteName="Home"

    screenOptions={{
      headerShown: false,
      tabBarStyle: {width:wp('100%'),height:50, },
      tabBarActiveTintColor:Colors.red,
      tabBarHideOnKeyboard:true,
      tabBarLabelStyle:{
        fontSize:12,
        fontFamily: Fontfamily.sansmedium,
       }
      }}
      
      >
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo
              name={'home'}
              size={22}
              style={[styles.buttonIcon, {color: color}]}
            />
          ),
        }}
      />

       <Tab.Screen
        name="Profile"
        component={OrderStatus}
        options={{
          headerShown: false,
          tabBarLabel: 'Order Status',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="list-status"
              size={22}
              style={[styles.buttonIcon, {color: color}]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={ChangeMenu}
        options={{
          headerShown: false,
          tabBarLabel: 'Cancel Order',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name='remove-shopping-cart'
              size={22}
              style={[styles.buttonIcon, {color: color}]}
            />
          ),
        }}
      />

       <Tab.Screen
        name="Cart"
        component={CancelOrder}
        options={{
          headerShown: false,
          tabBarLabel: 'ChangeMenu',
          tabBarIcon: ({color}) => (
              <FontAwesome5
                name="exchange-alt"
                size={22}
                style={[styles.buttonIcon, {color: color}]}
              />
            
          ),
        }}
      /> 

     
    </Tab.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({
  buttonIcon: {
    marginTop: hp('0.6%'),
  },

  itemCountContainer: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: Colors.common,
    marginLeft: 15,
    bottom: 9,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    borderWidth: 1.3,
    borderColor: Colors.white,
  },
  itemCountText: {
    color: Colors.white,
    fontFamily: Fontfamily.hc,
    fontSize: 13,
  },
});
