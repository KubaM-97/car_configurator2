import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation'
import Configurator from '~/screens/ConfiguratorScreen'
import Statistics from '~/screens/StatisticsScreen'

const screens = {
    Configurator: {
        screen: Configurator,
    },
    Statistics: {
        screen: Statistics,
    },
}

const defaultNavigationOptions = {
    headerShown: false,
}

const StackNavigation = createStackNavigator(screens, { 
    defaultNavigationOptions
})

export default createAppContainer(StackNavigation)