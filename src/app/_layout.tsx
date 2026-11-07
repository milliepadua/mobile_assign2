import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function Rootstack() {
  const { colors, isDark } = useTheme();
  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Rootstack />
    </ThemeProvider>
  );
}
