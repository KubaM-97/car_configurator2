import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ConfiguratorScreen from '~/screens/ConfiguratorScreen';
import StatisticsScreen from '~/screens/StatisticsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigator from '~/routes/stackNavigation'
const Stack = createNativeStackNavigator();

export default function App  () {
    return (
      <Navigator>
        {/* <Text>sssssssssssss</Text> */}
      </Navigator>

      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen name="ConfiguratorScreen" component={ConfiguratorScreen} />
      //     <Stack.Screen name="StatisticsScreen" component={StatisticsScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
}
