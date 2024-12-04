import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { format } from "date-fns";

const DATA = {
  id: 1,
  type: "mention",
  message: "@John mentioned you",
  timestamp: "2024-12-03T14:00:00Z",
  read: true,
};

export default function NotificationItem() {
  const formattedDate = format(new Date(DATA.timestamp), "MM/dd/yyyy");
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={[styles.wrapper, !DATA.read && styles.unread]}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.message}>
            {DATA.message} {!DATA.read && "**"}
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
  message: {
    color: Colors.text,
    paddingBottom: 5,
  },
});
