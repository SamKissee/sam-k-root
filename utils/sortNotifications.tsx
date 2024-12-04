import { isToday, isYesterday, parseISO } from "date-fns";
import { Notification } from "@/stores/useNotificationStore";

const sortGroup = (notifications: Notification[]) => {
  if (notifications.length <= 1) return notifications;

  return notifications.sort(
    (a, b) => parseISO(b.timestamp).getTime() - parseISO(a.timestamp).getTime()
  );
};

const sortNotifications = (notifications: Notification[]) => {
  const today: Notification[] = [];
  const yesterday: Notification[] = [];
  const older: Notification[] = [];
  notifications.map((item) => {
    const date = parseISO(item.timestamp);

    if (isToday(date)) {
      today.push(item);
    } else if (isYesterday(date)) {
      yesterday.push(item);
    } else {
      older.push(item);
    }
  });

  return [
    { title: "Today", data: sortGroup(today) },
    { title: "Yesterday", data: sortGroup(yesterday) },
    { title: "Older", data: sortGroup(older) },
  ];
};

export default sortNotifications;
