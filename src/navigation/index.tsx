import React from 'react';
import {Screens} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.Screen1} component={Screens.Screen1} />
      <Stack.Screen name={screenNames.Screen2} component={Screens.Screen2} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={screenNames.HomeStack} component={HomeStack} />
      <Tab.Screen name={screenNames.Contact} component={Screens.Contact} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={screenNames.TabNavigator} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
