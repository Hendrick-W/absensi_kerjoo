import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AbsenPage from '../screens/Absen'
import DataAbsenPage from '../screens/Data_Absen'
import MapPage from '../screens/Map'
import LogOutPage from '../screens/Logout'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const DataAndMapPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "History" component={DataAbsenPage}/>
      <Stack.Screen name="Map" component={MapPage}/>
    </Stack.Navigator>
  )
}

const MainNavigation = ({
    params,
}) => {
  return(
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#000",
      labelStyle:{
        fontSize: 12,
        fontWeight:"bold"
      }
    }}
    >
      <Tab.Screen 
      name="AbsenPage" 
      component={AbsenPage}
      options = {{
        tabBarIcon: ({ focused}) => (
          <MaterialIcons name="home" color={focused? "#EF9C27" : "#999999"} size={focused? 35: 25} />
        ),
        tabBarLabel: "Absensi",
        headerShown: false
      }}
    />
      <Tab.Screen 
        name="DataAndMap" 
        component={DataAndMapPage}
        options = {{
          tabBarIcon: ({ focused}) => (
            <MaterialIcons name="history" color={focused? "#EF9C27" : "#999999"} size={focused? 35: 25} />
          ),
          tabBarLabel: "History"
        }}  
      />
      <Tab.Screen 
        name="LogOut"
        component={LogOutPage}
        options = {{
          tabBarIcon: ({ focused}) => (
            <MaterialIcons name="logout" color={focused? "#EF9C27" : "#999999"} size={focused? 35: 25} />
          ),
          tabBarLabel: "Log Out"
        }}   
      />
    </Tab.Navigator>
)};

export default MainNavigation;
