import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.pixabay.com/photo/2023/08/08/10/50/hot-wheels-8177051_1280.jpg",
          }}
        />
      </View>

      <View style={styles.formCon}>
        <TextInput placeholder="Enter your Email" style={styles.inputCon} />
        <TextInput placeholder="Enter your Password" style={styles.inputCon} />

        <View style={styles.forgotPassCon}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </View>

        <View style={styles.buttonCon}>
          <Button title={"Login"} color="pink" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "orange",
  },

  topContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  formCon: {
    height: "40%",
    width: "100%",
    padding: 10,
  },

  inputCon: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  forgotPassCon: {
    alignSelf: "flex-end",
    paddingVertical: 10,
  },

  forgotPassText: {
    textDecorationLine: "underline",
    color: "blue",
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  buttonCon: {
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
});
