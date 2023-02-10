import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomDrawer = props => {
  const statusBarHeight = useSafeAreaInsets().top;

  const progress = useDrawerProgress();

  const viewStyle = useAnimatedStyle(() => {
    // const translateY = interpolate(progress.value, [0, 1], [0, 20]);
    const marginTop = interpolate(progress.value, [0, 1], [0, statusBarHeight]);
    return {
      // transform: [{translateY}],
      marginTop,
    };
  });

  return (
    <Animated.View
      style={[
        viewStyle,
        {
          flex: 1,
          backgroundColor: 'lightblue',
        },
      ]}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Animated.View>
  );
};
