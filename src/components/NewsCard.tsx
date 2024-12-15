import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Divider from "./ui/Divider";
import WidgetsComponent from "./WidgetsComponent";

type NewsCardProps = {
  title: string;
  index: number;
  thumbnail: string;
  url: string;
  source: {
    name: string;
    url: string;
    favicon: string;
  };
  keywords: string[];
};

const NewsCard = ({
  title,
  thumbnail,
  url,
  index,
  source,
  keywords,
}: NewsCardProps) => {
  const [like, setLike] = useState(false);

  // update index validity
  return (
    <React.Fragment>
      {index === 400 && <WidgetsComponent />}
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={1}
        className="flex flex-col justify-between p-4"
      >
        <Image
          source={{
            uri: thumbnail,
          }}
          height={200}
          width={400}
          style={{
            objectFit: "cover",
          }}
          className="rounded-3xl"
        />
        <Text
          className="text-white py-2 text-2xl"
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <Image
              source={{
                uri: source.favicon,
              }}
              height={20}
              width={20}
              style={{
                objectFit: "contain",
              }}
              className="rounded-full"
            />
            <Text className="text-white font-light">{source.name}</Text>
          </View>

          <View className="flex flex-row items-center w-1/4 justify-between">
            <TouchableOpacity onPress={() => setLike(!like)}>
              <Octicons
                name={like ? "heart-fill" : "heart"}
                size={18}
                color={like ? "red" : "gray"}
              />
            </TouchableOpacity>
            <Octicons name="share" size={18} color="gray" />
            <MaterialIcons name="more-vert" size={24} color="gray" />
          </View>
        </View>
        <View className="pt-4">
          <Divider />
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default NewsCard;
