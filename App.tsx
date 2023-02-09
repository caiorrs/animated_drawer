import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView>
          <View>
            <Text>App</Text>
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
