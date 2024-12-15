import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import * as Linking from "expo-linking";

type SearchItemProps = {
  title: string;
  href: string;
  body: string;
};

const SearchItem = ({ title, href, body }: SearchItemProps) => {
  return (
    <Pressable onPress={() => Linking.openURL(href)}>
      <View className="w-full p-4 flex flex-col h-fit bg-[#2e3034] rounded-2xl my-4">
        <Text className="text-2xl text-[#77a1f3]">{title}</Text>
        <Text
          className="text-white py-2 leading-6"
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {body}
        </Text>
      </View>
    </Pressable>
  );
};

export default SearchItem;
