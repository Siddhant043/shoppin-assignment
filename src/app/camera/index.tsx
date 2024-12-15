import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

const CameraScreen = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef();

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: true,
      });
      setCapturedImage(photo);
    }
  };
  console.log(capturedImage);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission || !permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View className="flex-1">
            <Text className="flex-1">
              We need your permission to show the camera
            </Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View className="bg-[#181818] flex-1 justify-center">
      <CameraView ref={cameraRef} facing={facing} className="flex-1">
        <View className="flex-1 bg-transparent m-96">
          <TouchableOpacity
            onPress={takePicture}
            className="absolute h-24 w-24 bg-white rounded-full top-72 right-28"
          ></TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default CameraScreen;
