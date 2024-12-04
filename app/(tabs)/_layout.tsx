import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

// hard coded to match design
const FRIEND_COUNT = 3;
const MESSAGES_COUNT = 2;

export default function TabLayout() {
  // TODO - Notification Count from Store
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.tabBackground,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          overflow: "hidden",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: Colors.text,
        headerStyle: {
          backgroundColor: Colors.header,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`home${!focused ? "-outline" : ""}`}
              size={23}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`people${!focused ? "-outline" : ""}`}
              size={23}
              color={color}
            />
          ),
          tabBarBadge: FRIEND_COUNT,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`chatbubble${!focused ? "-outline" : ""}`}
              size={23}
              color={color}
            />
          ),
          tabBarBadge: MESSAGES_COUNT,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`notifications${!focused ? "-outline" : ""}`}
              size={23}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`person${!focused ? "-outline" : ""}`}
              size={23}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
