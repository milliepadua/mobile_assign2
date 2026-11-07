//theme colors, which can be switched based on the theme selection
export const LIGHT_COLORS = {
  background: "#F9F4EF",
  card: "#FFFFFF",
  text: "#2E1515",
  subtext: "#4A3A3A",
  red: "#C8102E",
  white: "#FFFFFF",
  gray: "#8A7F7F",
  tan: "#EBDCCB",
  border: "#D9D2D2",
  disabled: "#F0F0F1",
  activeTab: "#F5C6CF",
  progressTrack: "#D6D0D0",
  progressFill: "#4A2C2C",
};

export type ThemeColors = typeof LIGHT_COLORS;

export const DARK_COLORS: ThemeColors = {
  background: "#1A1212",
  card: "#2A2020",
  text: "#F5EDE8",
  subtext: "#CBBFBA",
  red: "#E5384F",
  white: "#FFFFFF",
  gray: "#9A8F8F",
  tan: "#3A2D26",
  border: "#5A4D4D",
  disabled: "#352B2B",
  activeTab: "#5A2A33",
  progressTrack: "#4A3F3F",
  progressFill: "#E8DCD6",
};
