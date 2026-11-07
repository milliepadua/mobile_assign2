import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import SectionCard from "../components/SectionCard";
import SettingsRow from "../components/SettingsRow";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

export default function Account() {
  const { colors, isDark, toggleTheme } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();

  const comingSoon = () => {
    if (Platform.OS === "web") {
      window.alert("Screen is not part of the assignment prototype");
    } else {
      Alert.alert("Screen is not part of the assignment prototype");
    }
  };
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Account"
        right={
          <Ionicons name="chatbubbles-outline" size={28} color={colors.text} />
        }
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <SectionCard title="Support">
          <SettingsRow icon="help-circle-outline" label="How can we help?" />
        </SectionCard>

        <SectionCard title="Settings">
          <SettingsRow
            icon="person-circle-outline"
            label="Profile"
            onPress={() => router.push("/profile")}
            divider
          />
          <SettingsRow icon="cafe-outline" label="Recent orders" divider />
          <SettingsRow icon="card-outline" label="Payment Methods" divider />
          <SettingsRow
            icon="notifications-outline"
            label="Communication Preferences"
            divider
          />
          <SettingsRow
            icon="globe-outline"
            label="Language and Region"
            divider
          />
          {/* The light / dark theme toggle */}
          <SettingsRow
            icon={isDark ? "moon" : "sunny-outline"}
            label="Dark mode"
            right={
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.progressTrack, true: colors.red }}
                thumbColor={colors.white}
              />
            }
          />
        </SectionCard>

        <SectionCard title="Tims Rewards">
          <SettingsRow
            icon="leaf-outline"
            label="Manage card"
            onPress={() => router.push("/rewards")}
            divider
          />
          <SettingsRow
            icon="leaf-outline"
            label="Enter promo code"
            onPress={comingSoon}
            divider
          />
          <SettingsRow icon="leaf-outline" label="Partnerships" />
        </SectionCard>
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
      paddingBottom: 40,
    },
  });
