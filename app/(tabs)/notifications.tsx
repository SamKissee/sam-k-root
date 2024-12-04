import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import FilterBar from "@/components/FilterBar";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <FilterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
