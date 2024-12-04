import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const TABS = ["All", "Mentions", "Friend requests", "Invites"];

// TODO Add Set Functions and Load Filter Options from Store

export default function FilterBar() {
  return (
    <View style={styles.wrapper}>
      {TABS.map((item, index) => (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={[
              styles.filterButton,
              index === 0 && styles.filterButtonActive,
            ]}
          >
            <Text style={styles.text}>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  text: {
    color: Colors.text,
    textAlign: "center",
  },
  filterButton: {
    backgroundColor: Colors.filterButton,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  filterButtonActive: {
    backgroundColor: Colors.filterButtonActive,
  },
});
