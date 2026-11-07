import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import { ThemeColors } from "../../constants/colors";
import { CATEGORIES, PRODUCTS } from "../../constants/data";
import { useTheme } from "../../context/ThemeContext";

export default function Shop() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  //category, where null = show all
  const [category, setCategory] = useState<string | null>(null);
  const [sortLowToHigh, setSortLowToHigh] = useState(false);

  let products = PRODUCTS.filter(
    (p) => category === null || p.categories.includes(category),
  );

  if (sortLowToHigh) {
    products = [...products].sort((a, b) => a.price - b.price);
  }

  const listHeader = (
    <View>
      <View style={styles.categories}>
        {CATEGORIES.map((c) => (
          <Pressable
            key={c.id}
            style={styles.category}
            onPress={() => setCategory(category === c.id ? null : c.id)}
          >
            <View
              style={[
                styles.circle,
                category === c.id && styles.circleSelected,
              ]}
            >
              <Text style={styles.circleEmoji}>{c.emoji}</Text>
            </View>
            <Text style={styles.categoryLabel}>{c.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.filterRow}>
        <Pressable
          style={styles.filterButton}
          onPress={() => setSortLowToHigh(!sortLowToHigh)}
        >
          <Ionicons name="options-outline" size={26} color={colors.text} />
          <Text style={styles.filterText}>
            {sortLowToHigh ? "Price: low to high" : "Filter and sort"}
          </Text>
        </Pressable>
        <Text style={styles.count}>{products.length} products</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topSide}>
          <Ionicons name="menu" size={32} color={colors.text} />
          <Ionicons name="search" size={26} color={colors.text} />
        </View>
        <Text style={styles.logo}>
          <Text style={styles.logoItalic}>Tim</Text>Shop
        </Text>
        <View style={[styles.topSide, styles.topSideRight]}>
          <Ionicons name="bag-add-outline" size={28} color={colors.text} />
        </View>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(p) => p.id}
        ListHeaderComponent={listHeader}
        columnWrapperStyle={styles.columns}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    topBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      paddingTop: 52,
      paddingBottom: 14,
      paddingHorizontal: 16,
    },
    topSide: {
      width: 90,
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    topSideRight: {
      justifyContent: "flex-end",
    },
    logo: {
      flex: 1,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "800",
      color: colors.text,
    },
    logoItalic: {
      fontStyle: "italic",
      fontWeight: "500",
    },
    list: {
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    categories: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      paddingTop: 18,
    },
    category: {
      width: "33.33%",
      alignItems: "center",
      marginBottom: 14,
    },
    circle: {
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: colors.tan,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 3,
      borderColor: "transparent",
    },
    circleSelected: {
      borderColor: colors.red,
    },
    circleEmoji: {
      fontSize: 40,
    },
    categoryLabel: {
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
      color: colors.text,
      marginTop: 8,
    },
    filterRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 12,
      marginBottom: 18,
    },
    filterButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    filterText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text,
    },
    count: {
      fontSize: 16,
      color: colors.subtext,
    },
    columns: {
      gap: 16,
    },
  });
