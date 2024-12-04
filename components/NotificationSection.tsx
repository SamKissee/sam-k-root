import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import NotificationItem from "./NotificationItem";
import { Notification } from "@/stores/useNotificationStore";

type Props = {
  notifications: Notification[];
};

export default function NotificationSection({ notifications }: Props) {
  // TODO Accept section date and Items
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionDate}>Today</Text>
      <View style={styles.section}>
        {notifications.map((n) => (
          <NotificationItem notification={n} />
        ))}
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
