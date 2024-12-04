import { create } from "zustand";

export interface Notification {
  id: number;
  type: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface Filter {
  name: string;
  type: string | null;
}

interface NotificationState {
  notifications: Notification[];
  filters: Filter[];
  unreadCount: number;
  markAsRead: (notificationId: number) => void;
  addNotification: (notification: Notification) => void;
}

const initialState = {
  notifications: [
    {
      id: 1,
      type: "mention",
      message: "@John mentioned you",
      timestamp: "2024-12-03T14:00:00Z",
      read: true,
    },
    {
      id: 2,
      type: "friend",
      message: "@John mentioned you",
      timestamp: "2024-12-04T14:00:00Z",
      read: false,
    },
    {
      id: 3,
      type: "invite",
      message: "@John mentioned you",
      timestamp: "2024-12-02T14:00:00Z",
      read: true,
    },
  ],
  // Can add more filters as needed
  filters: [
    { name: "All", type: null },
    { name: "Mentions", type: "mention" },
    { name: "Friend requests", type: "friend" },
    { name: "Invites", type: "invite" },
  ],
};

const useNotificationStore = create<NotificationState>()((set) => ({
  ...initialState,
  unreadCount: initialState.notifications.filter((n) => !n.read).length,
  markAsRead: (notificationId: number) =>
    set((state) => {
      const newNotifications = state.notifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      );
      return {
        notifications: newNotifications,
        unreadCount: newNotifications.filter((n) => !n.read).length,
      };
    }),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          ...notification,
          id: state.notifications.length + 1,
          read: false,
        },
      ],
    })),
}));

export default useNotificationStore;
