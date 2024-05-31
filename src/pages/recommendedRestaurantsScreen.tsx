import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getRecommendedRestaurants } from '@/api/api';
import { IRecommendedRestaurant } from '@/interface/IRecommendedRestaurant';
import { Skeleton } from '@/components/Skeleton';

const RecommendedRestaurantsScreen: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRecommendedRestaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecommendedRestaurants();
      setRestaurants(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View className='flex-1 p-20'>
        <Skeleton className="h-20 w-full mb-4" />
        <Skeleton className="h-20 w-full mb-4" />
        <Skeleton className="h-20 w-full mb-4" />
      </View>
    );
  }

  return (
    <View className='flex-1 p-20'>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='mb-20'>
            <Text className='size-16 font-bold'>{item.name}</Text>
            <Text>{item.cuisine}</Text>
            <Text>{item.priceRange}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default RecommendedRestaurantsScreen;
