import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { format } from "date-fns";
import useNotificationStore, {
  Notification,
} from "@/stores/useNotificationStore";

type Props = {
  notification: Notification;
};

export default function NotificationItem({ notification }: Props) {
  const { markAsRead } = useNotificationStore();
  const formattedDate = format(new Date(notification.timestamp), "MM/dd/yyyy");

  return (
    <TouchableOpacity onPress={() => markAsRead(notification.id)}>
      <View style={[styles.wrapper, !notification.read && styles.unread]}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.message}>
            <Text style={[notification.read && styles.user]}>
              @{notification.user}
            </Text>{" "}
            {notification.message} {!notification.read && "**"}
            {/* Better unread */}
          </Text>
          <Text style={styles.timestamp}>{formattedDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 10,
    columnGap: 10,
    alignItems: "center",
  },
  text: {
    color: Colors.text,
    textAlign: "center",
  },
  image: {
    height: 35,
    width: 35,
  },
  unread: {
    backgroundColor: "grey", // change me
  },
  timestamp: {
    color: Colors.text,
    fontSize: 11,
  },
  user: {
    backgroundColor: Colors.userNameBackground,
  },
  message: {
    color: Colors.text,
    paddingBottom: 5,
  },
});
