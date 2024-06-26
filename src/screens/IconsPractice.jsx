import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconsPractice() {
  return (
    <View>
      <Text>IconsPractice</Text>
      <Feather name="heart" size={100} color="red" />
      <MaterialCommunityIcons name="flower" size={100} color="pink" />
    </View>
  );
}

const styles = StyleSheet.create({});
