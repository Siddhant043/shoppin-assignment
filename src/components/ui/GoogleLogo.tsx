import { View, Text, Image } from "react-native";
import React from "react";
import { googleLogoUri } from "@/src/constants/HomeScreenData";

const GoogleLogo = () => {
  return (
    <View className="w-1/2 m-auto p-10">
      <Image
        source={{
          uri: googleLogoUri,
        }}
        height={50}
        style={{
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default GoogleLogo;
