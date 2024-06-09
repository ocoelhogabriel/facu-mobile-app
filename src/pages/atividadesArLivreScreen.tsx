import { getAtividades } from '@/api/api';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import Loading from '@/components/Loading';
import { IAtividadeArLivre } from '@/interface/IAtividadeArLivre';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native';

const AtividadesArLivreScreen: React.FC = () => {
  const [activities, setActivities] = useState<IAtividadeArLivre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const objects = await getAtividades();
      setActivities(objects);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading message="Carregando atividades ao ar livre..." />;
  }

  return (
    <ImageBackground source={require("../../assets/3d-character-emerging-from-smartphone.png")} className="flex-1 bg-black bg-opacity-50">
      <SafeAreaView className="flex-1 p-5 ">
        <View className="flex-1 p-20">
          <FlatList
            data={activities}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-white/90">{item.name}</CardTitle>
                    <CardDescription className="text-white/90">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground >
  );
};

export default AtividadesArLivreScreen;
