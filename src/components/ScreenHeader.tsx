import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

// Reusable top bar that consists of back arrow, title, right icons,
type Props = {
  title: string;
  right?: ReactNode;
};

export default function ScreenHeader({ title, right }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  return (
    <View style={styles.header}>
      <View style={styles.side}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="arrow-back" size={28} color={colors.text} />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.side, styles.sideRight]}>{right}</View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      paddingTop: 52,
      paddingBottom: 14,
      paddingHorizontal: 16,
    },
    side: {
      width: 80,
      flexDirection: "row",
      alignItems: "center",
    },
    sideRight: {
      justifyContent: "flex-end",
      gap: 14,
    },
    title: {
      flex: 1,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
    },
  });
