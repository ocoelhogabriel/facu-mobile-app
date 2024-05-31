import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/pages/home'; // Certifique-se de que o caminho está correto
import HistoricalPointsScreen from '@/pages/historicalPointsScreen';
import OutdoorActivitiesScreen from '@/pages/outdoorActivitiesScreen';
import RecommendedRestaurantsScreen from '@/pages/recommendedRestaurantsScreen';

export type RootStackParamList = {
  Home: undefined;
  'Historical Points': undefined;
  'Recommended Restaurants': undefined;
  'Outdoor Activities': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Historical Points" component={HistoricalPointsScreen} />
        <Stack.Screen name="Recommended Restaurants" component={RecommendedRestaurantsScreen} />
        <Stack.Screen name="Outdoor Activities" component={OutdoorActivitiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
