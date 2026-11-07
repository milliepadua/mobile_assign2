import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { Offer } from "../constants/data";
import { useTheme } from "../context/ThemeContext";

// Offer Cards
type Props = {
  offer: Offer;
  activated: boolean;
  onToggle: () => void;
  onDetails: () => void;
};

export default function OfferCard({
  offer,
  activated,
  onToggle,
  onDetails,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const daysText = `${offer.daysLeft} ${offer.daysLeft === 1 ? "day" : "days"} left`;

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.banner,
          { backgroundColor: offer.banner === "red" ? colors.red : colors.tan },
        ]}
      >
        {offer.bannerText ? (
          <Text style={styles.bannerText}>{offer.bannerText}</Text>
        ) : (
          <Text style={styles.bannerEmoji}>{offer.emoji}</Text>
        )}
      </View>

      <View style={styles.body}>
        <View style={styles.info}>
          <Text style={styles.title}>{offer.title}</Text>
          <Text style={styles.text}>{offer.text}</Text>
        </View>

        <Text style={styles.days}>{daysText}</Text>

        <Pressable style={styles.detailsRow} onPress={onDetails}>
          <Text style={styles.detailsText}>Offer details</Text>
          <Ionicons
            name="document-text-outline"
            size={20}
            color={colors.text}
          />
        </Pressable>

        <Pressable
          style={[
            styles.button,
            activated ? styles.buttonOn : styles.buttonOff,
          ]}
          onPress={onToggle}
        >
          <Text
            style={[styles.buttonText, activated && { color: colors.text }]}
          >
            {activated ? "Activated" : "Activate"}
          </Text>
          {activated && <Ionicons name="flash" size={18} color={colors.text} />}
        </Pressable>
      </View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: 18,
      overflow: "hidden",
    },
    banner: {
      height: 130,
      alignItems: "center",
      justifyContent: "center",
    },
    bannerEmoji: {
      fontSize: 64,
    },
    bannerText: {
      fontSize: 34,
      fontWeight: "900",
      color: colors.white,
      textAlign: "center",
    },
    body: {
      flex: 1,
      padding: 14,
    },
    info: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text,
    },
    text: {
      fontSize: 14,
      color: colors.subtext,
      marginTop: 6,
      lineHeight: 20,
    },
    days: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.red,
      marginTop: 12,
    },
    detailsRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginTop: 12,
    },
    detailsText: {
      fontSize: 15,
      color: colors.text,
      textDecorationLine: "underline",
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      height: 44,
      borderRadius: 12,
      marginTop: 14,
    },
    buttonOff: {
      backgroundColor: colors.red,
    },
    buttonOn: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.border,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.white,
    },
  });
