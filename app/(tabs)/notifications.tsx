import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Notifications Screen</Text>
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
  text: {
    color: Colors.text,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },
});
