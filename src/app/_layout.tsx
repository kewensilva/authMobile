import { router, Stack } from "expo-router";
import { AuthProvider, useAuth } from "../context/authContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";



export default function MainLayout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user)
        router.replace("/(panel)/profile/page");
        return
      } else (!session)
      setAuth(undefined)
      router.replace("/(auth)/signin/page");
      console.log('está aqui no');
    })
  }, [])

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/signin/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/signup/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(panel)/profile/page"
          options={{ headerShown: false }}
        />
      </Stack>
      </AuthProvider>
  )
}