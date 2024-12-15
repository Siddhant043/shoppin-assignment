import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SettingsWidget = () => {
  return (
    <View className="flex border-2 border-[#2f3133] rounded-3xl w-52 h-24 p-4  justify-between">
      <View className="flex-row items-center gap-2">
        <MaterialIcons name="settings" size={24} color="#a5cafa" />
        <Text className="text-[#a5cafa]">Settings</Text>
      </View>
      <Text className="text-sm text-white">Customise your space</Text>
    </View>
  );
};

export default SettingsWidget;
