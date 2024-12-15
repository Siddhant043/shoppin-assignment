import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import SearchInputComponent from "@/src/components/SearchInputComponent";
import SearchItem from "@/src/components/SearchItem";
import { useSearchApi } from "@/src/lib/api/hooks";
import { useSearchStore } from "@/src/store/searchStore";

const Search = () => {
  const { searchQuery, results, isLoading } = useSearchApi();
  const { searchText, setSearchText } = useSearchStore();
  useEffect(() => {
    if (searchText.length > 1) {
      searchQuery();
    }
  }, [searchText]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-[#181818] flex-1">
        <SearchInputComponent
          value={searchText}
          onChangeText={setSearchText}
          onSubmit={searchQuery}
        />

        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        ) : results.length > 0 ? (
          <FlatList
            data={results}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
              <SearchItem
                body={item.body}
                title={item.title}
                href={item.href}
              />
            )}
          />
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500 text-xl">No results to show.</Text>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Search;
