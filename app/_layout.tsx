import { SplashScreen, Stack } from "expo-router";
import '../global.css'
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Simulate loading assets or data
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // 👇 Hide splash screen once ready
        SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="signup" options={{title: 'Signup'}}/>
      <Stack.Screen name="(signupWith)/email" options={{title: 'Continue with email'}}/>
      <Stack.Screen name="(signupWith)/gmail" options={{title: 'Continue with Google'}}/>
      <Stack.Screen name="(products)/addProducts" options={{title: 'Add Product'}} />
      <Stack.Screen name="products" options={{title: 'Products'}} />
      <Stack.Screen name="orders" options={{title: 'Orders'}} />
    </Stack>
  );
}