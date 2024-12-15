import { View, Text } from "react-native";
import React from "react";
import { useAiqData } from "../lib/api/hooks";
import Entypo from "@expo/vector-icons/Entypo";

const AiqWidget = () => {
  const { aiq, airquality } = useAiqData();
  return (
    <View className="flex border-2 border-[#2f3133] rounded-3xl w-52 h-24 p-4">
      <Text className="flex-1 text-white">Air Quality•{aiq}</Text>
      <View className="flex-1 flex-row items-center justify-between">
        <Text className=" text-sm text-white">{airquality}°</Text>
        <View className="flex items-center justify-center bg-[#fdff00] rounded-full p-4">
          <Entypo name="air" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default AiqWidget;
