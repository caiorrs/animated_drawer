import {Button, Text, View} from 'react-native';
import {DrawerScreenWrapper, Header} from '../../../../../components';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../../../../navigation/types';

type Screen1Props = NativeStackScreenProps<RootStackParamList>;

export const Screen1: React.FC<Screen1Props> = ({navigation}) => {
  return (
    <DrawerScreenWrapper>
      <View>
        <Text>Screen1</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
    </DrawerScreenWrapper>
  );
};
