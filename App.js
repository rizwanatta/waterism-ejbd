import { StatusBar } from "expo-status-bar";
import IconsPractice from "./src/screens/IconsPractice";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <IconsPractice />
    </View>
  );
}
