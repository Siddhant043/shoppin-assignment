import { View, Text } from "react-native";
import React from "react";
import { useAiqData } from "../lib/api/hooks";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AiqWidget = () => {
  const { aiq, airquality } = useAiqData();
  return (
    <View className="flex border-2 border-[#2f3133] rounded-3xl w-52 h-24 p-4">
      <Text className="flex-1 text-white">Air Quality•{aiq || 128}</Text>
      <View className="flex-1 flex-row items-center justify-between">
        <Text className=" text-sm text-white">{airquality || "Poor"}</Text>
        <View className="flex items-center justify-center bg-[#fdff00] rounded-full w-10">
          <MaterialIcons name="waves" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default AiqWidget;
