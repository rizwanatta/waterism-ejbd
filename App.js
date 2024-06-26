import { StatusBar } from "expo-status-bar";
import ListingCars from "./src/screens/ListingCars";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <ListingCars />
    </View>
  );
}
