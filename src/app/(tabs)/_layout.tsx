import { Tabs } from "expo-router";
import CustomTabBar from "../../components/CustomTabBar";

//This is the tab bar, which stays visible on the TimShop

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="scan" />
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="shop" />
    </Tabs>
  );
}
