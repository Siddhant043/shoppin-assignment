import { View, Pressable, TouchableOpacity, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const SearchComponent = () => {
  const router = useRouter();

  return (
    <View className="px-1">
      <View className="w-full rounded-full h-20 bg-[#2f3133] overflow-hidden p-3 flex items-center justify-center">
        <View className="w-full h-full flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.push("/search")}
            className="flex-1 flex-row items-center gap-4 px-4"
          >
            <AntDesign name="search1" size={24} color="gray" />
            <Text className="text-gray-500 text-3xl">Search</Text>
          </TouchableOpacity>
          <View className="w-1/5 flex-row items-center justify-between mr-4">
            <Pressable
              onPress={() => {
                router.push("/modal");
              }}
            >
              <MaterialIcons name="mic" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/camera");
              }}
            >
              <Feather name="camera" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchComponent;
