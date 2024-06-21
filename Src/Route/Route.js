import React from "react";

import{createStackNavigator}from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';


// import Splash from "../Screens/Splash";
// import Customer from '../Screens/Customer';
// import Login from "../Screens/Login";
// import Menu from "../Screens/Menu";
// import Home from "../Screens/Home";
// import OrderStatus from "../Screens/OrderStatus";
// import ChangeMenu from "../Screens/ChangeMenu";
// import CancelOrder from "../Screens/CancelOrder";
// import Bottom from "../Navigation/Bottom";
// import MyMenu from "../Screens/MyMenu";
// import OrderID from '../Screens/OrderID';
// import Special from '../Order/Special';
// import CreatOrder from '../Order/CreateOrder';
// import Report from '../Analytics/Report';
// import YourOrder from '../Screens/YourOrder';
// import MenuChange from "../Screens/MenuChange";

// import Splash from '../Lingal/Splash';
// import Login from '../Lingal/Login';
// import Handling from "../Lingal/Handling";
// import Loading from "../Lingal/Loading";
// import Unloading from "../Lingal/Unloading";
// import Vehicledetails from "../Lingal/Vehicledetails";
// import OrderReport from "../Lingal/OrderReport";
// import Scaner from "../Lingal/Scaner";
// import Qrscaner from '../Lingal/Qrscaner'

// import Home from '../Redux/Home';
// import List from '../Redux/List';
// import Wishlist from "../Redux/Wishlist";
// import Wishlistpage from "../Redux/FavoriteSlice";
// import Cartpage from "../Redux/Cartpage";
// import Favorite from "../Redux/Favorite";


// import Vehicle from "../Lingal/Vehicle";
// import Scanpage from '../Lingal/Scanpage';

import Fbase from '../Firebase/Firebase';





const App=createStackNavigator();

const Route=()=>{

    return(
        <NavigationContainer>
            <App.Navigator>


              
            <App.Screen
            name="Fbase"
            component={Fbase}
            options={{headerShown:false}}
            
            />

            {/* <App.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            
            /> */}

            {/* <App.Screen
            name="Vehicle"
            component={Vehicle}
            options={{headerShown:false}}
            
            />

            <App.Screen
            name="Scanpage"
            component={Scanpage}
            options={{headerShown:false}}
            
            /> */}

            {/* <App.Screen
            name="List"
            component={List}
            options={{headerShown:false}}
            
            /> */}
            {/* <App.Screen
            name="Wishlist"
            component={Wishlist}
            options={{headerShown:false}}
            
            />
            <App.Screen
            name="Wishlistpage"
            component={Wishlistpage}
            options={{headerShown:false}}
            
            />
            <App.Screen
            name="Favorite"
            component={Favorite}
            options={{headerShown:false}}
            
            /> */}
            {/* <App.Screen
            name="Cartpage"
            component={Cartpage}
            options={{headerShown:false}}
            
            />
           */}



            {/* <App.Screen
            name="Splash"
            component={Splash}
            options={{headerShown:false}}
            
            />

            <App.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
            
            />    

          <App.Screen
            name="Handling"
            component={Handling}
            options={{headerShown:false}}
            
            />  
            <App.Screen
            name="Loading"
            component={Loading}
            options={{headerShown:false}}
            
            />  
               <App.Screen
            name="Unloading"
            component={Unloading}
            options={{headerShown:false}}
            
            />  

            <App.Screen
            name="Vehicledetails"
            component={Vehicledetails}
            options={{headerShown:false}}
            
            />  
            <App.Screen
            name="OrderReport"
            component={OrderReport}
            options={{headerShown:false}}
            
            />  
            <App.Screen
            name="Scaner"
            component={Scaner}
            options={{headerShown:false}}
            
            />  
             <App.Screen
            name="Qrscaner"
            component={Qrscaner}
            options={{headerShown:false}}
            
            />     */}



                {/* <App.Screen
            name="Splash"
            component={Splash}
            options={{headerShown:false}}
            
            />  
               <App.Screen
            name="Customer"
            component={Customer}
            options={{headerShown:false}}
            
            />  
                <App.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
            
            /> 
                <App.Screen
            name="Menu"
            component={Menu}
            options={{headerShown:false}}
            
            />

             <App.Screen
            name="Bottom"
            component={Bottom}
            options={{headerShown:false}}
            
            /> 

              <App.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            
            /> 
              <App.Screen
            name="OrderStatus"
            component={OrderStatus}
            options={{headerShown:false}}
            
            /> 
              <App.Screen
            name="ChangeMenu"
            component={ChangeMenu}
            options={{headerShown:false}}
            
            /> 
              <App.Screen
            name="CancelOrder"
            component={CancelOrder}
            options={{headerShown:false}}
            
            /> 
              <App.Screen
            name="MyMenu"
            component={MyMenu}
            options={{headerShown:false}}
            
            /> 
              <App.Screen
            name="OrderID"
            component={OrderID}
            options={{headerShown:false}}
            
            /> 
               <App.Screen
            name="Special"
            component={Special}
            options={{headerShown:false}}
            
            /> 
              <App.Screen
            name="CreatOrder"
            component={CreatOrder}
            options={{headerShown:false}}
            /> 
            
            <App.Screen
            name="Report"
            component={Report}
            options={{headerShown:false}}
            /> 

          <App.Screen
            name="YourOrder"
            component={YourOrder}
            options={{headerShown:false}}
            /> 


             <App.Screen
            name="MenuChange "
            component={MenuChange }
            options={{headerShown:false}}
            
            />  */}

            </App.Navigator>

        </NavigationContainer>


    )
}

export default Route;
