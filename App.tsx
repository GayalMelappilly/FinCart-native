import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'components/Home/HomeScreenComponents';
import Signup from 'components/SignUp/Signup';
import SignupEmail from 'components/SignUp/SignupEmail';
import { View } from 'react-native';
import type { RootStackParamList } from 'types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <View className='h-12 w-full bg-white border-b-2 border-gray-500/30' />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignupWithEmail" component={SignupEmail} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
