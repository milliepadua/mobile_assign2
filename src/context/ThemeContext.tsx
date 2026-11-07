import { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { DARK_COLORS, LIGHT_COLORS, ThemeColors } from "../constants/colors";

type ThemeContextType = {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colors: LIGHT_COLORS,
  isDark: false,
  toggleTheme: () => {},
});

// wraps the whole app in the theme
export function ThemeProvider({ children }: { children: ReactNode }) {
  // phone settings will be selected first, then toggle to switch
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider
      value={{
        colors: isDark ? DARK_COLORS : LIGHT_COLORS,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
