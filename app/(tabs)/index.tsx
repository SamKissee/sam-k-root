import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
      />

      <Text style={styles.text}>Root Take Home Project</Text>
      <Text style={styles.text}>
        Navigate to Notifications to see required work.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  text: {
    color: Colors.text,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },
});
