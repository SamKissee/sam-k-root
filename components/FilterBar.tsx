import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import useNotificationStore from "@/stores/useNotificationStore";

type Props = {
  filter: string | null;
  setFilter: (value: string | null) => void;
};

export default function FilterBar({ filter, setFilter }: Props) {
  const { filters } = useNotificationStore();
  return (
    <View style={styles.wrapper}>
      {filters.map((item) => (
        <TouchableOpacity onPress={() => setFilter(item.type)} key={item.type}>
          <View
            style={[
              styles.filterButton,
              filter === item.type && styles.filterButtonActive,
            ]}
          >
            <Text style={styles.text}>{item.name}</Text>
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
