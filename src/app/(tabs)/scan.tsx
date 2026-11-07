import { ThemeColors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function Scan() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const handleAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert button pressed.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan</Text>
      <Text style={styles.subtitle}>Scan your code....</Text>

      <View style={styles.qrBox}>
        <Ionicons name="qr-code" size={140} color={colors.text} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Start scan" color={colors.red} onPress={handleAlert} />
      </View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      paddingTop: 80,
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: "800",
      color: colors.text,
    },
    subtitle: {
      fontSize: 16,
      color: colors.subtext,
      textAlign: "center",
      marginTop: 8,
    },
    qrBox: {
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 30,
      marginTop: 40,
    },
    buttonWrapper: {
      width: 200,
      marginTop: 40,
      borderRadius: 8,
      overflow: "hidden",
    },
  });
