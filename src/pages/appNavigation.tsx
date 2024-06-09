import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/pages/home'; // Certifique-se de que o caminho está correto
import PontosHistoricosScreen from './pontosHistoricosScreen';
import RestaurantesScreen from './restaurantesScreen';
import AtividadesArLivreScreen from './atividadesArLivreScreen';
import { ImageBackground } from 'react-native';
import CustomDarkTheme from '@/styles/theme';

export type RootStackParamList = {
  Home: undefined;
  'Pontos Históricos': undefined;
  'Restaurantes Recomendados': undefined;
  'Atividades Ao Ar Livre': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
      <NavigationContainer theme={CustomDarkTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pontos Históricos" component={PontosHistoricosScreen} />
          <Stack.Screen name="Restaurantes Recomendados" component={RestaurantesScreen} />
          <Stack.Screen name="Atividades Ao Ar Livre" component={AtividadesArLivreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigation;
