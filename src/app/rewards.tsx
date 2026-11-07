import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";
import PointsBar from "../components/PointsBar";
import ScreenHeader from "../components/ScreenHeader";
import { ThemeColors } from "../constants/colors";
import { HISTORY, REWARD_ITEMS, USER } from "../constants/data";
import { useTheme } from "../context/ThemeContext";

export default function Rewards() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const [tab, setTab] = useState<"rewards" | "history">("rewards");
  const [selectedId, setSelectedId] = useState("2");
  const [redeem, setRedeem] = useState(false);

  const selected =
    REWARD_ITEMS.find((r) => r.id === selectedId) ?? REWARD_ITEMS[0];

  return (
    <View style={styles.container}>
      <ScreenHeader title="Tims Rewards" />

      <View style={styles.tabs}>
        {(["rewards", "history"] as const).map((t) => (
          <Pressable
            key={t}
            style={[styles.tab, tab === t && styles.tabActive]}
            onPress={() => setTab(t)}
          >
            <Text style={[styles.tabText, tab === t && { color: colors.red }]}>
              {t === "rewards" ? "Rewards" : "History"}
            </Text>
          </Pressable>
        ))}
      </View>

      {tab === "rewards" ? (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.pointsCard}>
            <Text style={styles.pointsTitle}>{USER.points} points</Text>
            <PointsBar
              points={USER.points}
              goal={USER.goal}
              level={USER.level}
              badgeSize={44}
              showGoal
            />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.carousel}
              contentContainerStyle={styles.carouselContent}
            >
              {REWARD_ITEMS.map((item) => {
                const isSelected = item.id === selectedId;
                return (
                  <Pressable
                    key={item.id}
                    style={[
                      styles.rewardCard,
                      isSelected && styles.rewardCardOn,
                    ]}
                    onPress={() => setSelectedId(item.id)}
                  >
                    <View style={styles.rewardTop}>
                      <Text style={styles.rewardPts}>{item.pts} pts</Text>
                      <View
                        style={[styles.radio, isSelected && styles.radioOn]}
                      >
                        {isSelected && <View style={styles.radioDot} />}
                      </View>
                    </View>
                    <Text style={styles.rewardEmoji}>{item.emoji}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Text style={styles.levelLabel}>Reward Level</Text>
            <View style={styles.levelRow}>
              <Text style={styles.levelName}>{selected.name}</Text>
              <Ionicons name="chevron-forward" size={24} color={colors.text} />
            </View>
            <Text style={styles.levelPoints}>{selected.pts} points</Text>
          </View>

          <View style={styles.redeemCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.redeemTitle}>Redeem my reward</Text>
              <Text style={styles.redeemText}>
                {redeem
                  ? "Show your code at the counter."
                  : "You're banking your points."}
              </Text>
            </View>
            <Switch
              value={redeem}
              onValueChange={setRedeem}
              trackColor={{ false: colors.progressFill, true: colors.red }}
              thumbColor={colors.white}
            />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Using Tims Rewards Points</Text>
            <Text style={styles.infoText}>
              Earn points on every purchase, then redeem them for free food and
              drinks.
            </Text>
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={HISTORY}
          keyExtractor={(h) => h.id}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.historyRow}>
              <Ionicons name="cafe-outline" size={28} color={colors.text} />
              <View style={styles.historyText}>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyDate}>{item.date}</Text>
              </View>
              <Text style={styles.historyPoints}>+{item.points} pts</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    tabs: {
      flexDirection: "row",
      backgroundColor: colors.card,
    },
    tab: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 14,
      borderBottomWidth: 3,
      borderBottomColor: "transparent",
    },
    tabActive: {
      borderBottomColor: colors.red,
    },
    tabText: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text,
    },
    content: {
      padding: 16,
      paddingBottom: 40,
    },

    pointsCard: {
      backgroundColor: colors.tan,
      borderRadius: 20,
      padding: 20,
    },
    pointsTitle: {
      fontSize: 38,
      fontWeight: "800",
      color: colors.text,
      marginBottom: 18,
    },
    carousel: {
      marginTop: 20,
      marginHorizontal: -20,
    },
    carouselContent: {
      paddingHorizontal: 20,
      gap: 14,
    },
    rewardCard: {
      width: 160,
      height: 190,
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 16,
      borderWidth: 2,
      borderColor: "transparent",
    },
    rewardCardOn: {
      borderColor: colors.red,
    },
    rewardTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rewardPts: {
      fontSize: 20,
      fontWeight: "800",
      color: colors.text,
    },
    radio: {
      width: 26,
      height: 26,
      borderRadius: 13,
      borderWidth: 2,
      borderColor: colors.text,
      alignItems: "center",
      justifyContent: "center",
    },
    radioOn: {
      borderColor: colors.red,
    },
    radioDot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: colors.red,
    },
    rewardEmoji: {
      flex: 1,
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: 64,
      marginTop: 10,
    },
    levelLabel: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text,
      marginTop: 24,
    },
    levelRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 14,
    },
    levelName: {
      fontSize: 20,
      color: colors.text,
    },
    levelPoints: {
      fontSize: 17,
      color: colors.text,
      marginTop: 8,
    },

    redeemCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 20,
      marginTop: 16,
    },
    redeemTitle: {
      fontSize: 19,
      fontWeight: "700",
      color: colors.text,
    },
    redeemText: {
      fontSize: 16,
      color: colors.subtext,
      marginTop: 8,
    },

    manageRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 16,
      marginTop: 16,
    },
    leafBadge: {
      width: 50,
      height: 34,
      borderRadius: 6,
      backgroundColor: colors.red,
      alignItems: "center",
      justifyContent: "center",
    },
    manageText: {
      flex: 1,
      fontSize: 18,
      color: colors.text,
      marginLeft: 14,
    },

    infoCard: {
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 20,
      marginTop: 16,
    },
    infoTitle: {
      fontSize: 24,
      fontWeight: "800",
      color: colors.text,
    },
    infoText: {
      fontSize: 16,
      color: colors.subtext,
      lineHeight: 23,
      marginTop: 10,
    },

    historyRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 12,
    },
    historyText: {
      flex: 1,
      marginLeft: 14,
    },
    historyTitle: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text,
    },
    historyDate: {
      fontSize: 14,
      color: colors.subtext,
      marginTop: 2,
    },
    historyPoints: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.red,
    },
  });
