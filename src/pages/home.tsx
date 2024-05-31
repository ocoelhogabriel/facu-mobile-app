import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './appNavigation'; // Certifique-se de que o caminho está correto
import { Button } from '@/components/Button';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

function Home({ navigation }: HomeProps) {
  return (
    <View className="flex-1 justify-center items-center p-20">
      <Button variant="default" size="lg" label="Pontos Históricos" onPress={() => navigation.navigate('Historical Points')} />
      <Button variant="default" size="lg" label="Restaurantes Recomendados" onPress={() => navigation.navigate('Recommended Restaurants')} />
      <Button variant="default" size="lg" label="Atividades ao Ar Livre" onPress={() => navigation.navigate('Outdoor Activities')} />
    </View>
  );
}

export default Home;
