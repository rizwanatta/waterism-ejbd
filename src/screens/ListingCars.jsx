import { View, Text, FlatList, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function ListingCars() {
  // BUSINESS LOGIC AREA

  const cars = [
    "honda",
    "Mitshubishi",
    "hyundai",
    "Tesla",
    "Toyota",
    "BRV",
    "changan",
    "Ferrari",
    "Lamborgini",
    "jaguar",
  ];

  // structure for the list
  const renderItem = ({ item }) => (
    <View style={styles.itemCon}>
      <Ionicons name="car" size={30} color="white" />
      <Ionicons name="person" size={30} color="white" />
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={cars} renderItem={renderItem} />
    </View>
  );
}

export default ListingCars;

const styles = StyleSheet.create({
  itemCon: {
    margin: 10,
    padding: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
