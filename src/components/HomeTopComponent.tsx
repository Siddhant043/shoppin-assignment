import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GoogleGeminiToggle from "./GoogleGeminiToggle";
import { googleIconIcon } from "../constants/HomeScreenData";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import useSignIn from "../hooks/useSignIn";
import { useUserStore } from "../store/userStore";

// GoogleSignin.configure({
//   webClientId: `${process.env.EXPO_PUBLIC_AUTH_CLIENT_ID_WEB}`, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
//   scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: "", // specifies a hosted domain restriction
//   forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: "", // [Android] specifies an account name on the device that should be used
//   iosClientId: `${process.env.EXPO_PUBLIC_AUTH_CLIENT_ID_IOS}`, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
//   openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });

const HomeTopComponent = () => {
  const { signIn } = useSignIn();
  const { getUserData } = useUserStore();

  const { photo } = getUserData();
  const checkSignIn = () => {
    if (photo.length > 0) {
      //opnModal
      return;
    }
    signIn();
  };
  return (
    <View className=" flex flex-row px-5 py-2 items-center justify-between">
      <MaterialCommunityIcons name="test-tube" size={30} color="gray" />
      <GoogleGeminiToggle />
      <TouchableOpacity
        className={`bg-white rounded-full p-${photo ? "0" : "2"}`}
        onPress={checkSignIn}
      >
        <Image
          source={{
            uri: photo || googleIconIcon,
          }}
          height={photo ? 40 : 30}
          width={photo ? 40 : 30}
          className="rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeTopComponent;
