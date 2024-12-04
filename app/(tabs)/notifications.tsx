import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Basic Notifications Screen</Text>
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
