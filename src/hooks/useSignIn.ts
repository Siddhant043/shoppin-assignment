// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { useUserStore } from "../store/userStore";

const useSignIn = () => {
  const { updateUserData } = useUserStore();
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        updateUserData({
          name: response.data.user.name || "",
          email: response.data.user.email || "",
          photo: response.data.user.photo || "",
        });
      } else {
        console.log("Something went wrong.");
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log("Signin in progress", error);
            throw error;
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log("Play services not available error", error);
            throw error;
            break;
          default:
            console.log("Something went wrong.", error);
            throw error;
        }
      } else {
        console.log("Error not related to google sign in occured", error);
        throw error;
      }
    }
  };
  return { signIn };
};

export default useSignIn;
