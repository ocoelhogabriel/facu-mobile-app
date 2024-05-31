import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getOutdoorActivities } from '@/api/api';
import { IOutdoorActivity } from '@/interface/IOutdoorActivity';
import { Skeleton } from '@/components/Skeleton';

const OutdoorActivitiesScreen: React.FC = () => {
  const [activities, setActivities] = useState<IOutdoorActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const objects = await getOutdoorActivities();
      setActivities(objects);
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
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='mb-20'>
            <Text className='size-16 font-bold'>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OutdoorActivitiesScreen;
