import { Stack } from "expo-router";
import '../global.css'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="signup" options={{headerShown: false}}/>
      <Stack.Screen name="email" options={{headerShown: false}}/>
      <Stack.Screen name="gmail" options={{headerShown: false}}/>
    </Stack>
  );
}