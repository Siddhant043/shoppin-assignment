import { View, TextInput, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { googleIconIcon } from "@/src/constants/HomeScreenData";
import useSignIn from "../hooks/useSignIn";
import { useUserStore } from "../store/userStore";

const SearchInputComponent = ({ value, onChangeText, onSubmit }) => {
  const { signIn } = useSignIn();
  const { getUserData } = useUserStore();

  const { photo } = getUserData();

  // Function to clear the search input
  const clearSearchText = () => {
    onChangeText(""); // Clear the search input
  };

  return (
    <View className="flex flex-row items-center py-2 px-4 w-full h-14 bg-[#2f3133] mt-4 rounded-full">
      {/* Left Icon */}
      <Image
        source={{
          uri: googleIconIcon,
        }}
        height={30}
        width={30}
        className="rounded-full"
      />

      {/* Search Input */}
      <TextInput
        placeholder="Search here"
        value={value}
        onChangeText={onChangeText}
        className={`text-gray-400 text-2xl ml-4 flex-1`}
        style={{ color: "white" }}
        returnKeyType="search"
        onSubmitEditing={onSubmit} // Trigger search when "Enter" or "Search" key is pressed
      />

      {/* Clear Button */}
      {value ? (
        <Pressable onPress={clearSearchText}>
          <View className="flex w-10 border-gray-400 border-r mr-4 justify-center items-center">
            <Ionicons name="close" size={24} color="gray" />
          </View>
        </Pressable>
      ) : null}

      {/* User Profile or Sign-In Button */}
      {photo ? (
        <Image
          source={{
            uri: photo,
          }}
          height={30}
          width={30}
          className="rounded-full ml-2"
        />
      ) : (
        <Pressable onPress={signIn}>
          <View className="ml-2">
            <FontAwesome5 name="user-alt" size={24} color="gray" />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default SearchInputComponent;
