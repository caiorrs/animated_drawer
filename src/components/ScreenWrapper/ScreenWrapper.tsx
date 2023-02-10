import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Pressable, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import MenuIcon from '../../assets/icons/svg/menu.svg';
import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

export const ScreenWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export const DrawerScreenWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const navigation = useNavigation();

  const safe = useSafeAreaInsets();
  const progress = useDrawerProgress();

  const viewStyle = useAnimatedStyle(() => {
    const scale = 1 || interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 30]);
    const rotate = interpolate(progress.value, [0, 1], [0, -5]);
    const marginTop = interpolate(progress.value, [0, 1], [0, 20]);
    return {
      transform: [{scale}, {rotate: `${rotate}deg`}],
      borderRadius,
      marginTop,
    };
  });

  return (
    <View style={{flex: 1, paddingTop: safe.top}}>
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: '#FFF',
          },
          viewStyle,
        ]}>
        <Header onPress={() => navigation.toggleDrawer()} />
        {children}
      </Animated.View>
    </View>
  );
};

export const Header: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <MenuIcon fill="#000" height={30} width={30} />
      </Pressable>
    </View>
  );
};
