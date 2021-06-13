import React from 'react';
import { StyleSheet,View,Button } from 'react-native';
import{
    Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch,Text
}from 'react-native-paper';

import{  DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {color} from 'react-native-reanimated';

export function DrawerContent(props)

{
    const[isDarkTheme,setIsDarkTheme]=React.useState(false);
    const toggleTheme = () =>
    {
        setIsDarkTheme (!isDarkTheme);  
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
<View style={styles.drawerContent}>
    <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
            <Avatar.Image
            source={{
               uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }}
            size={50}
            />
            <View  style={{marginLeft:15,flexDirection:'column'}}>
                <Title style={styles.title}>Pooja Tipale</Title>
                <Caption style={styles.caption}>@poojatipale</Caption>
            </View>
        </View>
        <View style={styles.row}>
<View style={styles.section}>
    <Paragraph style={[styles.paragraph,styles.caption]}>98</Paragraph>
    <Caption style={styles.caption}>Following</Caption>
</View>
<View style={styles.section}>
    <Paragraph style={[styles.paragraph,styles.caption]}>100</Paragraph>
    <Caption style={styles.caption}>Followers</Caption>
</View>
</View>
</View>
<Drawer.Section style={styles.drawerContent}>
<DrawerItem
     icon={({color,size})=>(
         <Icon
         name="home-outline"
         color={color}
         size={20}
         />
         )}
         label="Home"
     onPress={()=>{props.navigation.navigate('Home')}}
     />
<DrawerItem
     icon={(color,size)=>(
         <Icon
         name="person-outline"
         color={color}
         size={20}
         />
         )}
         label="Profile"
     onPress={()=>{props.navigation.navigate('Profile')}}
     />
<DrawerItem 
     icon={(color,size)=>(
         <Icon
         name="bookmark-outline"
         color={color}
         size={20}
         />
         )}
         label="Bookmarks"
     onPress={()=>{props.navigation.navigate('BookmarkScreen')}}
     />
<DrawerItem
     icon={(color,size)=>(
         <Icon
         name="settings-outline"
         color={color}
         size={20}
         />
         )}
         label="Settings"
     onPress={()=>{props.navigation.navigate('SettingsScreen')}}
     />
     


<DrawerItem
     icon={(color,size)=>(
         <Icon
         name="people-outline"
        // <Icon icon={accountCheckOutline}
         color={color}
         size={20}
         />
         )}
         label="Support"
     onPress={()=>{props.navigation.navigate('SupportScreen')}} 
     />
</Drawer.Section>
<Drawer.Section title="preferences">
    <TouchableRipple onPress={()=>{toggleTheme()}}>
        <View style={styles.preference}>
            <Text>Dark Theme</Text>
   <View pointerEvents="none">  
          <Switch value= {isDarkTheme}/></View>
        </View>
    </TouchableRipple>

</Drawer.Section>
</View>
 </DrawerContentScrollView>
 <Drawer.Section style={styles.bottomDrawerSection}>
     <DrawerItem
     icon={(color,size)=>(
         <Icon
         name="log-out"
         color={color}
         size={20}

         />
     )}
     label="Sign Out"
     onPress={()=>{}}
     />
     </Drawer.Section>
           
        </View>
    );

}
const styles =StyleSheet.create({
    drawerContent:
    {
        flex:1,
    },
    userInfoSection:
    {
        paddingLeft:20,
    },
    title:
    {
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:
    {
fontSize:14,
lineHeight:14,
    },
    row:
    {
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold', 
        marginRight:3,
    },

    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },

    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:12,
    },


}
);
export default DrawerContent;