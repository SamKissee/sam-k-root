import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text>Basic Messages Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
