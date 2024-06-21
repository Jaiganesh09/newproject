import React ,{useState,useEffect}from 'react';
import {View,SafeAreaView,Text,TouchableOpacity,ToastAndroid} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';


  

const Home =()=>{

  const [data,setData]=useState('')
   
  if(data==='https://jai.com'){
    ToastAndroid.show('successfully',ToastAndroid.SHORT)
navigation.navigate('Qrscaner')

}

else{
ToastAndroid.show('your data is worng',ToastAndroid.SHORT)
}



// onSuccess = okay => {
//     Linking.openURL(okay.data).catch(err =>
//       console.error('error', err)     
//     );
//   };



console.log(data)


return(
    <SafeAreaView style={{flex:1}}>
        

         <QRCodeScanner
onRead={({data})=>setData(data)}

flashMode={RNCamera.Constants.FlashMode.off}
reactivate={true}
reactivateTimeout={500}
showMarker={true}
topContent={
    <View>
        <Text style={{fontSize:13,fontWeight:'400',color:'#000'}}>{data}</Text>
    </View>
}
bottomContent={
    <View>
        <Text style={{fontSize:15,fontWeight:'700',color:'#000'}}>QR Code Scaner</Text>
    </View>
}

/>
    </SafeAreaView>
)
}
export default Home;


// import React, { useEffect } from 'react';


// import { View, Button, Linking } from 'react-native';
// import { BarCodeScanner } from 'react-native-camera';
// import { useNavigation } from '@react-navigation/native';

// const QRScannerScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Function to handle scanned QR code
//     const handleBarCodeScanned = ({ data }) => {
//       // Check if scanned data is a URL or an identifier
//       // For example, assuming it's a URL
//       // You can add more validation or parsing as needed
//       if (data.startsWith('https://')) {
//         // Open the scanned URL in the device's default browser
//         Linking.openURL(data);
//       } else {
//         // Navigate to a specific screen based on the scanned identifier
//         navigation.navigate('ScannedScreen', { identifier: data });
//       }
//     };

//     // Subscribe to the scanning event
//     const unsubscribe = navigation.addListener('focus', () => {
//       // Start scanning when this screen is focused
//       // You may need permission checks for camera access
//       // and handling other scanning-related configurations
//       // This is a basic setup, and you might need to customize it further
//       // Check the documentation of the used libraries for detailed configuration
//       <BarCodeScanner
//         onBarCodeScanned={handleBarCodeScanned}
//         style={{ flex: 1 }}
//       />
//     });

//     // Clean up event listeners when the component unmounts or loses focus
//     return () => {
//       unsubscribe();
//     };
//   }, [navigation]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {/* Your UI components for the QR scanner screen */}
//     </View>
//   );
// };

// export default QRScannerScreen;