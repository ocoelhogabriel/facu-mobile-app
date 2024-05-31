import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useColorScheme } from 'nativewind';
import AppNatigation from './src/pages/appNavigation';
import "@/styles/global.css";
export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <SafeAreaView >
        <AppNatigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
