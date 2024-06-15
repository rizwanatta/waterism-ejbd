import { StatusBar } from "expo-status-bar";
import { Button, Buttong, Image, Text, TextInput, View } from "react-native";

import appIcon from "./assets/icon.png";

export default function App() {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <StatusBar style="light" />

      <View
        style={{
          height: "30%",
          width: "100%",
          backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={{ height: 100, width: 100 }} source={appIcon} />
      </View>

      <View
        style={{
          height: "40%",
          width: "100%",
          padding: 10,
        }}
      >
        <TextInput
          placeholder="Enter your Email"
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
          }}
        />
        <TextInput
          placeholder="Enter your Password"
          style={{ borderWidth: 1, padding: 10, marginTop: 10 }}
        />

        <View style={{ alignSelf: "flex-end", paddingVertical: 10 }}>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "blue",
              fontWeight: "bold",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Forgot Password?
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Button title={"Login"} />
        </View>
      </View>

      <View style={{ height: "30%", width: "100%" }}></View>
    </View>
  );
}
