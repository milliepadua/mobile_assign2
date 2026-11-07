import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

// home, scan, discover tabs
const TABS = [
  { name: "index", href: "/", label: "Home", icon: "home-outline" },
  { name: "scan", href: "/scan", label: "Scan", icon: "qr-code-outline" },
  {
    name: "discover",
    href: "/discover",
    label: "Discover",
    icon: "sparkles-outline",
  },
] as const;

// which tab is open
type Props = {
  state: { index: number; routes: { name: string }[] };
};

export default function CustomTabBar({ state }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  //For Home -> TimShop
  const currentName = state.routes[state.index].name;
  const activeName = currentName === "shop" ? "index" : currentName;

  return (
    <View style={styles.tabBar}>
      {TABS.map((tab) => {
        const active = tab.name === activeName;
        const color = active ? colors.red : colors.text;

        return (
          <Pressable
            key={tab.name}
            style={styles.tabItem}
            onPress={() => router.navigate(tab.href)}
          >
            <View
              style={[
                styles.pill,
                active && { backgroundColor: colors.activeTab },
              ]}
            >
              <Ionicons name={tab.icon} size={28} color={color} />
            </View>
            <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    tabBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: colors.card,
      paddingTop: 12,
      paddingBottom: 28,
    },
    tabItem: {
      alignItems: "center",
      width: 100,
    },
    pill: {
      paddingHorizontal: 22,
      paddingVertical: 8,
      borderRadius: 20,
    },
    tabLabel: {
      marginTop: 4,
      fontSize: 14,
      fontWeight: "700",
    },
  });
