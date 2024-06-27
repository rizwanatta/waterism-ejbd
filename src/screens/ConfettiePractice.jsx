import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ConfettiCannon from "react-native-confetti-cannon";

export default function ConfettiePractice() {
  return (
    <View style={styles.con}>
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        colors={["red", "pink", "blue"]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    height: "100%",
    width: "100%",
  },
});
