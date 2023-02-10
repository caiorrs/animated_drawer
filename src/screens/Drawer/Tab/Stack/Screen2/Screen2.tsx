import {Button, Text, View} from 'react-native';

import {DrawerScreenWrapper} from '../../../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../../../../navigation/types';

type Screen2Props = NativeStackScreenProps<RootStackParamList>;

export const Screen2: React.FC<Screen2Props> = ({navigation}) => {
  return (
    <DrawerScreenWrapper>
      <View>
        <Text>Screen2</Text>
        <Button title="Go Back" onPress={navigation.goBack} />
      </View>
    </DrawerScreenWrapper>
  );
};
