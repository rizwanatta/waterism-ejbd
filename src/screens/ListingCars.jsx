import { View, Text, FlatList, StyleSheet } from "react-native";

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
