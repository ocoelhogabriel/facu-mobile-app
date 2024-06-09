import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { getRestaurantes } from '@/api/api';
import { IRestaurantes } from '@/interface/IRestaurantes';
import Loading from '@/components/Loading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';

const RestaurantesScreen: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurantes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurantes();
      setRestaurants(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading message="Carregando restaurantes..." />;
  }

  return (
    <ImageBackground source={require("../../assets/3d-character-emerging-from-smartphone.png")} className="flex-1 bg-black bg-opacity-50">
      <SafeAreaView className="flex-1 p-5 ">
        <View className="flex-1 p-20">
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-white/90">{item.name}</CardTitle>
                    <CardDescription className="text-white/90">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-500">
                    <Text className="text-white/90"> - {item.priceRange}</Text>
                    <Text className="text-white/90"> - {item.cuisine}</Text>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RestaurantesScreen;
