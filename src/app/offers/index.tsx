import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import OfferCard from "../../components/OfferCard";
import ScreenHeader from "../../components/ScreenHeader";
import { ThemeColors } from "../../constants/colors";
import { OFFERS } from "../../constants/data";
import { useTheme } from "../../context/ThemeContext";

export default function Offers() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  // offer ids
  const [activeIds, setActiveIds] = useState<string[]>(
    OFFERS.filter((o) => o.activated).map((o) => o.id),
  );

  //toggle for the offer
  const toggleOffer = (id: string) => {
    if (activeIds.includes(id)) {
      setActiveIds(activeIds.filter((activeId) => activeId !== id));
    } else {
      setActiveIds([...activeIds, id]);
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Offers"
        right={
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="close" size={30} color={colors.text} />
          </Pressable>
        }
      />

      {/* offercard */}
      <FlatList
        data={OFFERS}
        numColumns={2}
        keyExtractor={(offer) => offer.id}
        columnWrapperStyle={styles.columns}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <OfferCard
            offer={item}
            activated={activeIds.includes(item.id)}
            onToggle={() => toggleOffer(item.id)}
            onDetails={() =>
              router.push({ pathname: "/offers/[id]", params: { id: item.id } })
            }
          />
        )}
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
    list: {
      padding: 16,
      gap: 14,
    },
    columns: {
      gap: 14,
    },
  });
