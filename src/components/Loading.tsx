import React from 'react';
import { View, ActivityIndicator, Text, ImageBackground } from 'react-native';
import { cn } from '../lib/utils';

interface LoadingProps {
  message?: string;
  className?: string;
  size?: 'small' | 'large';
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ message, className, size = 'large', color = '#fff' }) => {
  return (
    <ImageBackground source={require("../../assets/3d-character-emerging-from-smartphone.png")} className="flex-1 bg-black bg-opacity-50">
      <View className={cn('flex-1 justify-center items-center bg-black/70', className)}>
        <ActivityIndicator size={size} color={color} />
        {message && <Text className="mt-4 text-white text-lg">{message}</Text>}
      </View>
    </ImageBackground>
  );
};

export default Loading;
