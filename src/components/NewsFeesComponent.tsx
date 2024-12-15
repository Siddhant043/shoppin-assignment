import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";

import { useNewsData } from "../lib/api/hooks";
import NewsCard from "./NewsCard";

const NewsFeesComponent = () => {
  //const {data, error, isLoading} = useNewsData()

  const data = [
    {
      title:
        "India to be global submarine building hub? Germany’s Thyssenkrupp eyes P75I contract, offers to make submarines here - Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/india-to-be-global-submarine-building-hub-germanys-thyssenkrupp-eyes-p75i-contract-offers-to-make-submarines-here/articleshow/116278066.cms",
      date: "2024-12-13T07:00:00+00:00",
      thumbnail:
        "https://static.toiimg.com/thumb/msid-116278685,width-1070,height-580,imgsize-68738,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      description:
        "India Business News: Thyssenkrupp Marine Systems (TKMS) aims to establish India as a global submarine and warship construction hub, citing potential 50% cost reductions. C",
      source: {
        name: "The Times of India",
        url: "https://timesofindia.indiatimes.com",
        favicon:
          "https://staticns.bonai.io/publisher/FyngUqLVrSlhTtIHqPyf3yVgD6YG21335eFlzDKX4Y",
      },
      keywords: ["Business news"],
      authors: ["TOI Business Desk"],
    },
    {
      title:
        "India to be global submarine building hub? Germany’s Thyssenkrupp eyes P75I contract, offers to make submarines here - Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/india-to-be-global-submarine-building-hub-germanys-thyssenkrupp-eyes-p75i-contract-offers-to-make-submarines-here/articleshow/116278066.cms",
      date: "2024-12-13T07:00:00+00:00",
      thumbnail:
        "https://static.toiimg.com/thumb/msid-116278685,width-1070,height-580,imgsize-68738,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      description:
        "India Business News: Thyssenkrupp Marine Systems (TKMS) aims to establish India as a global submarine and warship construction hub, citing potential 50% cost reductions. C",
      source: {
        name: "The Times of India",
        url: "https://timesofindia.indiatimes.com",
        favicon:
          "https://staticns.bonai.io/publisher/FyngUqLVrSlhTtIHqPyf3yVgD6YG21335eFlzDKX4Y",
      },
      keywords: ["Business news"],
      authors: ["TOI Business Desk"],
    },
    {
      title:
        "India to be global submarine building hub? Germany’s Thyssenkrupp eyes P75I contract, offers to make submarines here - Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/india-to-be-global-submarine-building-hub-germanys-thyssenkrupp-eyes-p75i-contract-offers-to-make-submarines-here/articleshow/116278066.cms",
      date: "2024-12-13T07:00:00+00:00",
      thumbnail:
        "https://static.toiimg.com/thumb/msid-116278685,width-1070,height-580,imgsize-68738,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      description:
        "India Business News: Thyssenkrupp Marine Systems (TKMS) aims to establish India as a global submarine and warship construction hub, citing potential 50% cost reductions. C",
      source: {
        name: "The Times of India",
        url: "https://timesofindia.indiatimes.com",
        favicon:
          "https://staticns.bonai.io/publisher/FyngUqLVrSlhTtIHqPyf3yVgD6YG21335eFlzDKX4Y",
      },
      keywords: ["Business news"],
      authors: ["TOI Business Desk"],
    },
    {
      title:
        "India to be global submarine building hub? Germany’s Thyssenkrupp eyes P75I contract, offers to make submarines here - Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/india-to-be-global-submarine-building-hub-germanys-thyssenkrupp-eyes-p75i-contract-offers-to-make-submarines-here/articleshow/116278066.cms",
      date: "2024-12-13T07:00:00+00:00",
      thumbnail:
        "https://static.toiimg.com/thumb/msid-116278685,width-1070,height-580,imgsize-68738,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      description:
        "India Business News: Thyssenkrupp Marine Systems (TKMS) aims to establish India as a global submarine and warship construction hub, citing potential 50% cost reductions. C",
      source: {
        name: "The Times of India",
        url: "https://timesofindia.indiatimes.com",
        favicon:
          "https://staticns.bonai.io/publisher/FyngUqLVrSlhTtIHqPyf3yVgD6YG21335eFlzDKX4Y",
      },
      keywords: ["Business news"],
      authors: ["TOI Business Desk"],
    },
  ];
  return (
    <View className="flex w-full h-screen">
      <FlatList
        data={data}
        initialNumToRender={3}
        windowSize={2}
        refreshControl={
          <RefreshControl onRefresh={() => {}} refreshing={false} />
        }
        renderItem={({ item, index }) => {
          return (
            <NewsCard
              index={index}
              title={item.title}
              thumbnail={item.thumbnail}
              url={item.url}
              source={item.source}
              keywords={item.keywords}
            />
          );
        }}
      />
    </View>
  );
};

export default NewsFeesComponent;
