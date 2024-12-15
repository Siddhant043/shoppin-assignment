import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";
import { useWeatherData } from "../lib/api/hooks";
import WeatherWidget from "./WeatherWidget";
import AiqWidget from "./AiqWidget";
import SettingsWidget from "./SettingsWidget";

const WidgetsComponent = () => {
  return (
    <ScrollView
      horizontal
      contentContainerClassName="p-4 gap-4"
      showsHorizontalScrollIndicator={false}
    >
      <WeatherWidget />
      <AiqWidget />
      <SettingsWidget />
    </ScrollView>
  );
};

export default WidgetsComponent;
