import {DrawerScreenWrapper, Header} from '../components';

import {CustomDrawer} from './Drawer';
import {Dimensions} from 'react-native';
import React from 'react';
import {Screens} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';

const dimensions = Dimensions.get('screen');

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenNames.Screen1} component={Screens.Screen1} />
      <Stack.Screen name={screenNames.Screen2} component={Screens.Screen2} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    // <DrawerScreenWrapper>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        header: ({navigation}) => (
          <Header onPress={() => navigation.toggleDrawer()} />
        ),
      }}>
      <Tab.Screen name={screenNames.HomeStack} component={HomeStack} />
      <Tab.Screen name={screenNames.Contact} component={Screens.Contact} />
    </Tab.Navigator>
    // </DrawerScreenWrapper>
  );
};

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          // backgroundColor: 'transparent',
          width: dimensions.width * 0.3,
        },
        // drawerStyle: {
        //   flex: 1,
        //   width: '70%',
        //   paddingRight: 20,
        //   backgroundColor: 'transparent',
        // },
        sceneContainerStyle: {
          backgroundColor: 'darkblue',
        },
        // drawerContentContainerStyle: {
        //   backgroundColor: 'darkblue',
        // },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{title: 'Tabs'}}
        name={screenNames.TabNavigator}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
