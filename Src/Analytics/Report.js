import react,{useState} from "react";
import { SafeAreaView,View,Text,StyleSheet,Button}from "react-native";
import {CalendarList} from "react-native-common-date-picker"
import { BottomSheet } from 'react-native-btr';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

const Report =()=>{

  const [visible, setVisible] = useState(false);
  const[confirmdate,setConfirmdate]=useState('');
  const[visible4,setVisible4]=useState('')

  const toggleBottomNavigationView = () => {
   
    setVisible(!visible);
  };

  return(
    <SafeAreaView style={{flex:1}}>

    
      <View style={{marginTop:400,alignItems:'center',justifyContent:'center',}}>
     <Button
           
          onPress={toggleBottomNavigationView}
          title="Select Date Range"
          color={'black'}
          borderRadius='30'
        /> 
        </View> 


         <BottomSheet
         visible={visible}
         onBackButtonPress={toggleBottomNavigationView}
         onBackdropPress={toggleBottomNavigationView}>
           
         <View style={{height:hp('45%'),width:wp('100%'),backgroundColor:'white'}}>

         <CalendarList
                            // minDate={currentMonthStart}
                            maxDate={'2030-01-01'}
                            minDate={'2023-01-01'}
                            cancel={() => setVisible4(false)}
                            // headerTitleType={5}
                            selectedDateMarkType={'circle'}
                            horizontal={true}
                            pagingEnabled={true}
                            confirm={confirmdate}
                           
                        />

         </View>


         </BottomSheet>
    </SafeAreaView>

  )
}
export default Report;

const jai=StyleSheet.create({
  V1:{height :hp('10%'),width:wp('90%'),backgroundColor:'blue',marginTop:10}

})