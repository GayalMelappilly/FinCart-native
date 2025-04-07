import { SplashScreen, Stack } from "expo-router";
import '../global.css'
import { useEffect } from "react";
import { FooterElementProvider } from "context/FooterContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };

    hideSplash();
  }, []);
  return (
    <FooterElementProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: 'Signup' }} />
        <Stack.Screen name="(signupWith)/email" options={{ title: 'Continue with email' }} />
        <Stack.Screen name="(signupWith)/gmail" options={{ title: 'Continue with Google' }} />
        <Stack.Screen name="(products)/addProducts" options={{ title: 'Add Product' }} />
        <Stack.Screen name="products" options={{ title: 'Products' }} />
        <Stack.Screen name="orders" options={{ title: 'Orders' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      </Stack>
    </FooterElementProvider>
  );
}