import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import ToggleContent from "./ToogleContent";
import { toggleData } from "../constants/HomeScreenData";

const GoogleGeminiToggle = () => {
  const [isGoogleSelected, setIsGoogleSelected] = useState("google");
  return (
    <View className="flex flex-row w-52 p-3 bg-[#2f3133] items-center justify-between rounded-2xl">
      {toggleData.map((item) => (
        <ToggleContent
          key={item.id}
          id={item.id}
          uri={item.uri}
          label={item.label}
          show={isGoogleSelected}
          setShow={setIsGoogleSelected}
        />
      ))}
    </View>
  );
};

export default GoogleGeminiToggle;
