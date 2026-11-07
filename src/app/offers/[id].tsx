import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import { ThemeColors } from "../../constants/colors";
import { OFFERS } from "../../constants/data";
import { useTheme } from "../../context/ThemeContext";

export default function OfferDetails() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  // Read the id then show the content of the id
  const { id } = useLocalSearchParams<{ id: string }>();
  const offer = OFFERS.find((o) => o.id === id);

  if (!offer) {
    return (
      <View style={styles.container}>
        <ScreenHeader title="Offer details" />
        <Text style={styles.notFound}>Offer not found</Text>
      </View>
    );
  }

  const daysText = `${offer.daysLeft} ${offer.daysLeft === 1 ? "day" : "days"} left`;

  return (
    <View style={styles.container}>
      <ScreenHeader title="Offer details" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View
            style={[
              styles.banner,
              {
                backgroundColor:
                  offer.banner === "red" ? colors.red : colors.tan,
              },
            ]}
          >
            {offer.bannerText ? (
              <Text style={styles.bannerText}>{offer.bannerText}</Text>
            ) : (
              <Text style={styles.bannerEmoji}>{offer.emoji}</Text>
            )}
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>{offer.title}</Text>
            <Text style={styles.text}>{offer.text}</Text>
            <Text style={styles.days}>{daysText}</Text>

            <Text style={styles.sectionTitle}>Terms</Text>
            <Text style={styles.text}>{offer.details}</Text>
          </View>
        </View>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
          <Text style={styles.buttonText}>Back to offers</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      padding: 16,
    },
    notFound: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
      textAlign: "center",
      marginTop: 40,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 18,
      overflow: "hidden",
    },
    banner: {
      height: 200,
      alignItems: "center",
      justifyContent: "center",
    },
    bannerEmoji: {
      fontSize: 90,
    },
    bannerText: {
      fontSize: 48,
      fontWeight: "900",
      color: colors.white,
    },
    body: {
      padding: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: "800",
      color: colors.text,
    },
    text: {
      fontSize: 16,
      color: colors.subtext,
      marginTop: 8,
      lineHeight: 23,
    },
    days: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.red,
      marginTop: 14,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text,
      marginTop: 22,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      backgroundColor: colors.red,
      height: 54,
      borderRadius: 14,
      marginTop: 20,
    },
    buttonText: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.white,
    },
  });
