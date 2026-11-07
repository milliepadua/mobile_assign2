import { StyleSheet, Text, View } from "react-native";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

// The points progress bar (static: the fill never changes)
type Props = {
  level: number;
  goal?: number;
  badgeSize?: number;
  showGoal?: boolean;
};

export default function PointsBar({
  level,
  goal,
  badgeSize = 32,
  showGoal = false,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.track}>
          <View style={styles.fill} />
        </View>

        <View
          style={[
            styles.badge,
            {
              marginLeft: -badgeSize,
              width: badgeSize,
              height: badgeSize,
              borderRadius: badgeSize / 2,
            },
          ]}
        >
          <Text style={[styles.badgeText, { fontSize: badgeSize * 0.45 }]}>
            {level}
          </Text>
        </View>
      </View>

      {showGoal && <Text style={styles.goal}>{goal}</Text>}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrapper: {
      justifyContent: "center",
      marginVertical: 4,
    },
    track: {
      height: 10,
      borderRadius: 5,
      backgroundColor: colors.progressTrack,
      overflow: "hidden",
    },
    fill: {
      width: "92%",
      height: "100%",
      backgroundColor: colors.progressFill,
    },
    badge: {
      position: "absolute",
      left: "92%",
      backgroundColor: colors.card,
      borderWidth: 3,
      borderColor: colors.progressFill,
      alignItems: "center",
      justifyContent: "center",
    },
    badgeText: {
      fontWeight: "700",
      color: colors.text,
    },
    goal: {
      alignSelf: "flex-end",
      fontSize: 12,
      color: colors.text,
      marginTop: 8,
    },
  });
