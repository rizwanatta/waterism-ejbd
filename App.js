import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ConfettiePractice from "./src/screens/ConfettiePractice";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <ConfettiePractice />
    </View>
  );
}
