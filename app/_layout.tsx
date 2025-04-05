import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="email" options={{ title: "Email" }} />
      <Stack.Screen name="gmail" options={{ title: "Gmail" }} />
    </Stack>
  );
}