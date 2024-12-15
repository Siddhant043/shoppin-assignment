import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable } from "react-native";

import { HapticTab } from "@/src/components/HapticTab";

import TabBarBackground from "@/src/components/ui/TabBarBackground";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { IconSymbol } from "@/src/components/ui/IconSymbol.ios";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8bb4f8",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#2f3133",
          borderTopColor: "#2f3133",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Pressable
              className={`flex items-start justify-center w-16 h-full ${
                focused && "bg-[#3a4356]"
              } rounded-full`}
            >
              <MaterialIcons
                className="m-auto"
                name="home-filled"
                size={30}
                color={color}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Pressable
              className={`flex items-start justify-center w-16 h-full ${
                focused && "bg-[#3a4356]"
              } rounded-full`}
            >
              <Octicons
                className="m-auto"
                name="clock"
                size={24}
                color={color}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notications",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Pressable
              className={`flex items-start justify-center w-16 h-full ${
                focused && "bg-[#3a4356]"
              } rounded-full`}
            >
              <MaterialCommunityIcons
                name="bell-outline"
                className="m-auto"
                size={28}
                color={color}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Pressable
              className={`flex items-start justify-center w-16 h-full ${
                focused && "bg-[#3a4356]"
              } rounded-full`}
            >
              <MaterialCommunityIcons
                className="m-auto"
                name="menu"
                size={28}
                color={color}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
