import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useWeatherData } from "../lib/api/hooks";

const WeatherWidget = () => {
  const { temperature, city, timeofday, error, isLoading } = useWeatherData();

  return (
    <View className="flex border-2 border-[#2f3133] rounded-3xl w-52 h-24 p-4">
      <Text className="flex-1 text-white">{city}</Text>
      <View className="flex-1 flex-row items-center justify-between">
        <Text className="font-medium text-2xl text-white">{temperature}°</Text>
        {timeofday === "day" ? (
          <MaterialIcons name="sunny" size={24} color="yellow" />
        ) : (
          <Ionicons name="moon" size={24} color="#c8dbfd" />
        )}
      </View>
    </View>
  );
};

export default WeatherWidget;
