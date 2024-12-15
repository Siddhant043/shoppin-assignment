import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Voice from "@react-native-voice/voice";
import { useEffect, useState } from "react";
import { useSearchApi } from "@/src/lib/api/hooks";
import { router } from "expo-router";
import { useSearchStore } from "@/src/store/searchStore";

export default function Modal() {
  const [listening, setListening] = useState(false);
  const [recogText, setRecogText] = useState("");
  const { setSearchText } = useSearchStore();

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = stopRecog;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = (error) => console.log("onSpeechError", error);

    return () => {
      Voice.destroy().then(() => {
        Voice.removeAllListeners();
      });
    };
  }, []);

  const onSpeechStart = () => {
    setRecogText("");
    setListening(true);
  };

  const onSpeechResults = (event) => {
    setRecogText(event.value[0]);
  };

  const startRecog = async () => {
    try {
      await Voice.start("en-US");
    } catch (error) {
      console.log("Error in recog", error);
    }
  };
  const stopRecog = async () => {
    try {
      await Voice.stop();
      setListening(false);
      setSearchText(recogText);
      router.replace("/search");
    } catch (error) {
      console.log("Error in recog", error);
    }
  };

  const handleMicPress = () => {
    if (listening) {
      stopRecog();
    }
    if (!listening) {
      startRecog();
    }
  };

  return (
    <View className="bg-[#2f3133] h-full p-6">
      <Text
        numberOfLines={10}
        ellipsizeMode="tail"
        className="w-full h-1/2 text-2xl text-white"
      >
        {recogText}
      </Text>

      <View className="w-full flex items-center">
        <MaterialIcons
          name="mic"
          size={38}
          color={!listening ? "gray" : "white"}
        />
      </View>

      <Pressable
        onPress={handleMicPress}
        className="w-full flex felx-col items-center justify-center py-10"
      >
        <Text className=" text-2xl text-white">
          {!listening ? "Tap to Listen" : "Listening..."}
        </Text>
        <Text className=" text-2xl text-white mt-2">
          {listening && "Tap to Stop"}
        </Text>
      </Pressable>
    </View>
  );
}
