import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Counters from '../../presentation/pages/Counters/Counters';
import Config from '../../presentation/pages/Config/Config';
import { ParamListBase, RouteProp } from '@react-navigation/core';

const { Navigator, Screen } = createBottomTabNavigator();

Icon.loadFont();

interface RenderIconProps {
  route: RouteProp<ParamListBase, string>;
  size: number;
  color: string;
}

export const Routes = () => {
  const headerOptions: BottomTabNavigationOptions = {
    headerStyle: {
      backgroundColor: '#061b47',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  const renderIcon = ({ route, size, color }: RenderIconProps) => {
    let iconName;

    switch (route.name) {
      case 'Counters':
        iconName = 'home';
        break;
      case 'Config':
        iconName = 'settings';
        break;
      default:
        iconName = 'home';
        break;
    }

    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Navigator
      initialRouteName="Counter"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#f79501',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {
          backgroundColor: '#061b47',
        },

        tabBarIcon: ({ color, size }) => renderIcon({ route, size, color }),
      })}>
      <Screen name="Counters" component={Counters} options={headerOptions} />
      <Screen name="Config" component={Config} options={headerOptions} />
    </Navigator>
  );
};

export default Routes;
