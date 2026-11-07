import { StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { Product } from "../constants/data";
import { useTheme } from "../context/ThemeContext";

// Product Tiles
export default function ProductCard({ product }: { product: Product }) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Text style={styles.emoji}>{product.emoji}</Text>
        {product.isNew && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>NEW</Text>
          </View>
        )}
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      flex: 1,
    },
    image: {
      aspectRatio: 1,
      backgroundColor: colors.tan,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    emoji: {
      fontSize: 80,
    },
    badge: {
      position: "absolute",
      top: 10,
      left: 10,
      backgroundColor: colors.text,
      borderRadius: 4,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    badgeText: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.background,
    },
    name: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text,
      marginTop: 10,
    },
    price: {
      fontSize: 18,
      color: colors.text,
      marginTop: 8,
      marginBottom: 20,
    },
  });
