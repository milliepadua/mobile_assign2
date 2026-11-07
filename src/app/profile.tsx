import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Alert,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import FormField from "../components/FormField";
import ScreenHeader from "../components/ScreenHeader";
import { ThemeColors } from "../constants/colors";
import { USER } from "../constants/data";
import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  // Each text box remembers what the user types
  const [name, setName] = useState(USER.name);
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [postal, setPostal] = useState("");

  const handleUpdate = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert button pressed.");
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Profile"
        right={
          <>
            <Ionicons name="bag-add-outline" size={26} color={colors.text} />
            <Ionicons
              name="person-circle-outline"
              size={30}
              color={colors.text}
            />
          </>
        }
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <FormField label="Your email" value={USER.email} editable={false} />

        <View style={styles.gap} />
        <FormField label="Name" value={name} onChangeText={setName} />

        <View style={styles.gap} />
        <FormField
          label="Phone number (optional)"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <View style={styles.gap} />
        <Text style={styles.label}>Date of birth (optional)</Text>
        <View style={styles.dobRow}>
          <View style={styles.dobCell}>
            <FormField
              value={day}
              onChangeText={setDay}
              placeholder="Day"
              helper="DD"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.dobCell}>
            <FormField
              value={month}
              onChangeText={setMonth}
              placeholder="Month"
              helper="MM"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.dobCell}>
            <FormField
              value={year}
              onChangeText={setYear}
              placeholder="Year"
              helper="YYYY"
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={styles.gap} />
        <FormField label="Country" value="Canada" editable={false} />

        <View style={styles.gap} />
        <FormField
          label="Postal code (optional)"
          value={postal}
          onChangeText={setPostal}
        />
      </ScrollView>

      {/* Fixed Update button at the bottom */}
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
      </View>
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
      paddingTop: 24,
      paddingBottom: 24,
    },
    gap: {
      height: 24,
    },
    label: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 10,
    },
    dobRow: {
      flexDirection: "row",
      gap: 12,
    },
    dobCell: {
      flex: 1,
    },
    footer: {
      backgroundColor: colors.card,
      paddingHorizontal: 16,
      paddingTop: 14,
      paddingBottom: 30,
    },
    button: {
      height: 56,
      borderRadius: 14,
      backgroundColor: colors.red,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.white,
    },
  });
