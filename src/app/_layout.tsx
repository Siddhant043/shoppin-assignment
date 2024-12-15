import { Stack } from "expo-router";
import "../../global.css";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const queryClient = new QueryClient();
  const loaded = true;
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen name="camera" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
