import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { getPontosHistoricos } from '@/api/api';
import { IPontosHistoricos } from '@/interface/IPontosHistoricos';
import Loading from '@/components/Loading';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/Card';

const PontosHistoricosScreen: React.FC = () => {
  const [pontos, setPontos] = useState<IPontosHistoricos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const objects = await getPontosHistoricos();
      setPontos(objects);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading message="Carregando pontos históricos..." />;
  }

  return (
    <ImageBackground source={require("../../assets/3d-character-emerging-from-smartphone.png")} className="flex-1 bg-black bg-opacity-50">
      <SafeAreaView className="flex-1 p-5 ">
        <View className="flex-1 p-20">
          <FlatList
            data={pontos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card>
                  <CardHeader>
                    <CardTitle className=" text-white/90">{item.name}</CardTitle>
                    <CardDescription className="text-white/90">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PontosHistoricosScreen;
