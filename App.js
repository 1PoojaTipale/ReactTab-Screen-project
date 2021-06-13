
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import DrawerContent from './screens/DrawerContent';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from  './screens/RootStackScreen';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View,Button, ActivityIndicator } from 'react-native';


const Drawer = createDrawerNavigator();

const App= ()=> 
{
  // const [isLoading,setIsLoading]=React.useState(true);
  // const[userToken,setUserToken]=React.useState(null);

  // const authContext=React.useMemo(()=>({
  //   signIn:()=>{
  //     setUserToken('fgkj');
  //     setIsLoading(false);
  //   },
  //   signOut:()=>{
  //     setUserToken(null);
  //     setIsLoading(false);
  //   },
  //   signUp:()=>{
  //     setUserToken('fgkj');
  //     setIsLoading(false);
  //   },
  // }));

//   useEffect(()=>{
// setTimeout(()=>{
// setIsLoading(false)
// },1000);
//   },[]);
//   if(isLoading){
//     return(
//       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//         <ActivityIndicator size="large"/>
//       </View>
//     );
//   }
  return(
  
<NavigationContainer>

{/* <RootStackScreen/> */}

{<Drawer.Navigator drawerContent={props=> <DrawerContent {...props}/>} >
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>}

    </NavigationContainer>
  

  );
}

export default App ;