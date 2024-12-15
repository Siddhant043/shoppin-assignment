import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SearchComponent from "@/src/components/SearchComponent";

import GoogleLogo from "@/src/components/ui/GoogleLogo";
import HomeTopComponent from "@/src/components/HomeTopComponent";
import IconsComponent from "@/src/components/IconsComponent";
import Divider from "@/src/components/ui/Divider";
import NewsFeesComponent from "@/src/components/NewsFeesComponent";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-[#181818]">
        <ScrollView className="bg-[#181818] flex flex-col">
          <HomeTopComponent />
          <GoogleLogo />
          <SearchComponent />
          <IconsComponent />
          <Divider />

          <NewsFeesComponent />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
