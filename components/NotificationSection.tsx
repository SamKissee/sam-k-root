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
  wrapper: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 20,
    columnGap: 5,
    alignSelf: "center",
  },
  sectionDate: {},
  section: {},
});
