import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import NotificationItem from "./NotificationItem";

export default function NotificationSection() {
  // TODO Accept section date and Items
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionDate}>Today</Text>
      <View style={styles.section}>
        <NotificationItem />
        <NotificationItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 5 },
  sectionDate: {
    paddingLeft: 10,
    paddingBottom: 5,
    color: Colors.text,
    fontWeight: "bold",
  },
  section: { backgroundColor: Colors.sectionBackground },
});
