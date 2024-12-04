import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import FilterBar from "@/components/FilterBar";
import NotificationSection from "@/components/NotificationSection";
import useNotificationStore from "@/stores/useNotificationStore";

export default function Notifications() {
  const { notifications } = useNotificationStore();
  const [filter, setFilter] = React.useState<string | null>(null);

  return (
    <View style={styles.container}>
      <FilterBar filter={filter} setFilter={setFilter} />
      <NotificationSection notifications={notifications} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
