import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './appNavigation'; // Certifique-se de que o caminho está correto
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/Card';
import { Button } from '@/components/Button';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

function Home({ navigation }: HomeProps) {
  return (
    <ImageBackground source={require("../../assets/3d-character-emerging-from-smartphone.png")} className="flex-1 bg-black bg-opacity-50" >
      <SafeAreaView className="flex-1 p-5 ">
        <View className="flex-none items-center">
          <Card>
            <CardHeader>
              <CardTitle className='text-white/90'>Guia Turístico</CardTitle>
              <CardDescription className='text-white/90'>Enter a new development experience</CardDescription>
            </CardHeader>
          </Card>
        </View>
        <View className="flex-1 justify-center items-center w-full">
          <Button key="historical-points" label="Pontos Históricos" onPress={() => navigation.navigate('Pontos Históricos')} />
          <Button key="recommended-restaurants" label="Restaurantes Recomendados" onPress={() => navigation.navigate('Restaurantes Recomendados')} />
          <Button key="outdoor-activities" label="Atividades Ao Ar Livre" onPress={() => navigation.navigate('Atividades Ao Ar Livre')} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Home;
