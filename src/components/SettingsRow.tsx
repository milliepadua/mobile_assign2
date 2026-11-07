import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

// One row: icon, label, and an arrow to the right
type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  right?: ReactNode;
  divider?: boolean;
};

export default function SettingsRow({
  icon,
  label,
  onPress,
  right,
  divider,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <View style={styles.row}>
        <Ionicons name={icon} size={26} color={colors.text} />
        <Text style={styles.label}>{label}</Text>
        {right ?? (
          <Ionicons name="chevron-forward" size={24} color={colors.text} />
        )}
      </View>
      {divider && <View style={styles.divider} />}
    </Pressable>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
    },
    label: {
      flex: 1,
      fontSize: 17,
      fontWeight: "600",
      color: colors.text,
      marginLeft: 14,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
    },
  });
