import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const DATA = {
  id: 1,
  type: "mention",
  message: "@John mentioned you",
  timestamp: "2024-12-03T14:00:00Z",
  read: true,
};

export default function NotificationItem() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={[styles.wrapper, !DATA.read && styles.unread]}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.image}
        />
        <View>
          <Text>
            {DATA.message} {!DATA.read && "**"}
            {/* Better unread */}
          </Text>
          <Text>{DATA.timestamp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginVertical: 10,
    columnGap: 10,
    alignSelf: "center",
  },
  text: {
    color: Colors.text,
    textAlign: "center",
  },
  image: {
    height: 25,
    width: 25,
  },
  unread: {
    backgroundColor: "grey", // change me
  },
});
