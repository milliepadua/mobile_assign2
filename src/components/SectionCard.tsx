import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

type Props = {
  title: string;
  children: ReactNode;
};

export default function SectionCard({ title, children }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 6,
      marginBottom: 16,
    },
    title: {
      fontSize: 26,
      fontWeight: "800",
      color: colors.text,
      marginBottom: 8,
    },
  });
