import React from "react";
import {}from 'react-native';


import App from './Src/Route/Route';
import { Provider } from 'react-redux';
import {Store} from './Src/Redux/Store';
import firebase from '@react-native-firebase/app';

const Jai =()=>{

    const firebaseConfig = {
        apiKey: 'AIzaSyBbeNybtyOEhanDkODkC9M-1G-EhCvShps',
        projectId: 'fir-otp-f79ae',
        storageBucket: 'fir-otp-f79ae.appspot.com',
        messagingSenderId: '979694363870',
        appId: '1:979694363870:android:74691dcf1381b908008e4f',
        databaseURL:'https://fir-otp-f79ae-default-rtdb.firebaseio.com'
       };
    
       if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
       }

    return(

<Provider store={Store}>
<App/>
</Provider>

    )


}

export default Jai;

