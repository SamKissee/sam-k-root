import React from "react";
import { StyleSheet, View, SectionList, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import FilterBar from "@/components/FilterBar";
import useNotificationStore from "@/stores/useNotificationStore";
import sortNotifications from "@/utils/sortNotifications";
import NotificationItem from "@/components/NotificationItem";
import generateNotification from "@/utils/generateNotification";

export default function Notifications() {
  const { notifications, addNotification } = useNotificationStore();
  const [filter, setFilter] = React.useState<string | null>(null);

  React.useEffect(() => {
    // runs randomly between 30s and 2min
    const randomTimeout = () => Math.random() * (120000 - 30000) + 30000;
    // kind of a code blob, but sets a new timeout at the end of the current timeout.
    let timeout = setTimeout(function run() {
      addNotification(generateNotification());
      timeout = setTimeout(run, randomTimeout());
    }, randomTimeout());

    return () => clearTimeout(timeout);
  }, []);

  const data = React.useMemo(() => {
    // simple sort/filter memo. If All selected the filter is null.
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
