import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Alert,
  Button,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PointsBar from "../../components/PointsBar";
import { ThemeColors } from "../../constants/colors";
import { GRID_ITEMS, GridItem, USER } from "../../constants/data";
import { useTheme } from "../../context/ThemeContext";

const Index = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  const handleAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert button pressed.");
    }
  };

  // Tiles with a route open that screen. The rest show a small message.
  const handleTilePress = (item: GridItem) => {
    if (item.route) {
      router.push(item.route);
    } else {
      handleAlert;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top icon row */}
        <View style={styles.topBar}>
          <Pressable onPress={() => router.push("/shop")}>
            <Ionicons name="bag-add-outline" size={28} color={colors.text} />
          </Pressable>
          <Pressable onPress={() => router.push("/account")}>
            <Ionicons
              name="person-circle-outline"
              size={34}
              color={colors.text}
              style={{ marginLeft: 18 }}
            />
          </Pressable>
        </View>

        {/* Welcome Message */}
        <Text style={styles.greeting}>
          Good afternoon, {"\n"}
          {USER.name}
        </Text>

        {/* Banner */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          <View style={styles.ctCard}>
            <Text style={styles.ctLogo}>✕</Text>
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.ctTitle}>Earn CT Money®</Text>
              <Text style={styles.ctBody}>
                Link your accounts to earn Canadian Tire Money® on eligible
                purchases.
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={colors.text} />
          </View>
        </ScrollView>

        {/* Order + Rewards */}
        <View style={styles.cardRow}>
          <Pressable
            style={styles.bigCard}
            onPress={() => router.push("/discover")}
          >
            <Text style={styles.cardTitle}>Order</Text>
            <Text style={styles.orderEmoticon}>🍩</Text>
            <Text style={styles.cardCaption}>
              Start an Order for your Tims favourites.
            </Text>
          </Pressable>

          <Pressable
            style={styles.bigCard}
            onPress={() => router.push("/rewards")}
          >
            <Text style={styles.cardTitle}>Rewards</Text>
            <Text style={styles.points}>{USER.pointsLabel} pts</Text>
            <PointsBar
              points={USER.points}
              goal={USER.goal}
              level={USER.level}
            />
            <Text style={styles.cardCaption}>You're banking your points.</Text>
          </Pressable>
        </View>

        {/* Icon grid */}
        <View style={styles.grid}>
          {GRID_ITEMS.map((item) => (
            <Pressable
              key={item.label}
              style={styles.gridItem}
              onPress={() => handleTilePress(item)}
            >
              <View style={styles.gridTile}>
                <Text style={styles.gridEmoji}>{item.icon}</Text>
              </View>
              <Text style={styles.gridLabel}>{item.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Alert button */}
        <View style={styles.alertButtonWrapper}>
          <Button title="Alert" color={colors.red} onPress={handleAlert} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    bannerScroll: {
      flexGrow: 0,
    },

    scrollContent: {
      paddingTop: 56,
      paddingBottom: 24,
    },

    topBar: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingHorizontal: 20,
    },

    greeting: {
      fontSize: 32,
      fontWeight: "800",
      color: colors.text,
      lineHeight: 40,
      paddingHorizontal: 20,
      marginTop: 18,
      marginBottom: 18,
    },

    ctCard: {
      width: 330,
      height: 110,
      backgroundColor: colors.card,
      borderRadius: 18,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      marginRight: 14,
    },

    ctLogo: {
      fontSize: 44,
      fontWeight: "900",
      color: colors.red,
    },

    ctTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
    },

    ctBody: {
      fontSize: 14,
      color: colors.subtext,
      marginTop: 2,
    },

    // Order and Rewards
    cardRow: {
      flexDirection: "row",
      paddingHorizontal: 16,
      marginTop: 22,
      gap: 14,
    },

    bigCard: {
      flex: 1,
      height: 190,
      backgroundColor: colors.card,
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 16,
      justifyContent: "space-between",
      shadowColor: "#000000",
      shadowOpacity: 0.06,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },

    cardTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
    },

    cardCaption: {
      fontSize: 14,
      textAlign: "center",
      color: colors.subtext,
    },

    orderEmoticon: {
      fontSize: 34,
      textAlign: "center",
    },

    points: {
      fontSize: 32,
      fontWeight: "800",
      textAlign: "center",
      color: colors.text,
    },

    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 8,
      marginTop: 26,
    },

    gridItem: {
      width: "25%",
      alignItems: "center",
      marginBottom: 20,
    },

    gridTile: {
      width: 74,
      height: 74,
      backgroundColor: colors.card,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
    },

    gridEmoji: {
      fontSize: 32,
    },

    gridLabel: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: "600",
      textAlign: "center",
      color: colors.text,
    },

    alertButtonWrapper: {
      marginHorizontal: 40,
      marginTop: 16,
      borderRadius: 8,
      overflow: "hidden",
    },
  });
