import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { ThemeColors } from "../constants/colors";
import { useTheme } from "../context/ThemeContext";

type Props = {
  label?: string;
  helper?: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export default function FormField({
  label,
  helper,
  value,
  onChangeText,
  placeholder,
  editable = true,
  keyboardType,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, editable ? styles.inputOn : styles.inputOff]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        editable={editable}
        keyboardType={keyboardType}
      />
      {helper && <Text style={styles.helper}>{helper}</Text>}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrapper: {},
    label: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 10,
    },
    input: {
      height: 56,
      borderRadius: 14,
      paddingHorizontal: 16,
      fontSize: 17,
    },
    inputOn: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.border,
      color: colors.text,
    },
    inputOff: {
      backgroundColor: colors.disabled,
      color: colors.gray,
    },
    helper: {
      fontSize: 14,
      color: colors.subtext,
      marginTop: 8,
    },
  });
