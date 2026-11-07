import { ThemeColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { DISCOVER_ITEMS } from "../../constants/data";
import { useTheme } from "../../context/ThemeContext";

export default function Discover() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  //saved item ids
  const [saved, setSaved] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    if (saved.includes(id)) {
      setSaved(saved.filter((savedId) => savedId !== id));
    } else {
      setSaved([...saved, id]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>Tap a card to save it.</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {DISCOVER_ITEMS.map((item) => {
          const isSaved = saved.includes(item.id);

          return (
            <Pressable
              key={item.id}
              style={styles.card}
              onPress={() => toggleSave(item.id)}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBody}>{item.text}</Text>
              </View>
              <Ionicons
                name={isSaved ? "heart" : "heart-outline"}
                size={28}
                color={colors.red}
              />
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 80,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: "800",
      color: colors.text,
    },
    subtitle: {
      fontSize: 16,
      color: colors.subtext,
      marginTop: 4,
      marginBottom: 16,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 14,
    },
    emoji: {
      fontSize: 40,
    },
    cardText: {
      flex: 1,
      marginLeft: 14,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text,
    },
    cardBody: {
      fontSize: 14,
      color: colors.subtext,
      marginTop: 2,
    },
  });
