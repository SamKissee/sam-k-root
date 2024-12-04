import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Friends() {
  return (
    <View style={styles.container}>
      <Text>Basic Friends Screen</Text>
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
