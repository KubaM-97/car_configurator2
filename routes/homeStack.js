import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerTintColor: 'red',
      height: 60
    }}
  >
    <Screen
      name='Home'
      component={Home}
      options={{ title: 'GameZone' }}
    />
    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={{ title: 'Review Details' }}
    />
  </Navigator>
);

export default HomeStack;