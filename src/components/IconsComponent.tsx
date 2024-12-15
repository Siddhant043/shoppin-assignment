import { View, Text, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconsComponent = () => {
  return (
    <ScrollView
      horizontal
      contentContainerClassName="py-6 h-28 flex-row justify-evenly w-full"
      showsHorizontalScrollIndicator={false}
    >
      <View className="bg-[#4d4431] w-1/5 rounded-full flex items-center justify-center">
        <MaterialCommunityIcons
          name="image-search-outline"
          size={24}
          color="yellow"
        />
      </View>
      <View className="bg-[#36404e] w-1/5 rounded-full flex items-center justify-center">
        <MaterialCommunityIcons name="translate" size={24} color="#88aff1" />
      </View>
      <View className="bg-[#34423c] w-1/5 rounded-full flex items-center justify-center">
        <SimpleLineIcons name="graduation" size={24} color="#bfd6c9" />
      </View>
      <View className="bg-[#492f33] w-1/5 rounded-full flex items-center justify-center">
        <Ionicons name="musical-note-outline" size={24} color="#f18c84" />
      </View>
    </ScrollView>
  );
};

export default IconsComponent;

//
