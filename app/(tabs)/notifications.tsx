import React from "react";
import { StyleSheet, View, SectionList, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import FilterBar from "@/components/FilterBar";
import useNotificationStore from "@/stores/useNotificationStore";
import sortNotifications from "@/utils/sortNotifications";
import NotificationItem from "@/components/NotificationItem";
import { Notification } from "@/stores/useNotificationStore";

export default function Notifications() {
  const { notifications } = useNotificationStore();
  const [filter, setFilter] = React.useState<string | null>(null);

  const data = React.useMemo(() => {
    if (!filter) {
      return sortNotifications(notifications);
    } else {
      const filtered = notifications.filter((item) => item.type === filter);
      return sortNotifications(filtered);
    }
  }, [notifications, filter]);

  return (
    <View style={styles.container}>
      <FilterBar filter={filter} setFilter={setFilter} />
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionDate}>{title}</Text>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  sectionDate: {
    paddingLeft: 10,
    paddingVertical: 5,
    color: Colors.text,
    fontWeight: "bold",
  },
});
