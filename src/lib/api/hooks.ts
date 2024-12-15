import { useQuery } from "@tanstack/react-query";
import {
  fetchAiq,
  fetchNewsData,
  fetchWeather,
  performWebSearch,
} from "./client";
import { useLocation } from "@/src/hooks/useLocation";
import getDayOrNight from "@/src/utils/getDayOrNight";
import { getAirQuality } from "@/src/utils/getAirQuality";
import { useState } from "react";
import { useSearchStore } from "@/src/store/searchStore";

export const useWeatherData = () => {
  const { location, errorMsg } = useLocation();

  const q = location
    ? `${location.coords.latitude},${location.coords.longitude}`
    : null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", q],
    queryFn: () => (q ? fetchWeather(q) : Promise.resolve(undefined)),
    enabled: !!q,
  });

  const temperature = data?.current?.temp_c ?? null;
  const city = data?.location?.name ?? null;
  const timeofday = data?.location?.localtime
    ? getDayOrNight(data.location.localtime)
    : null;

  return { temperature, city, timeofday, error, isLoading, errorMsg };
};

export const useAiqData = () => {
  const { location, errorMsg } = useLocation();

  const lat = location?.coords?.latitude?.toString() || "";
  const long = location?.coords?.longitude?.toString() || "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["aiq", lat, long],
    queryFn: () =>
      lat && long ? fetchAiq(long, lat) : Promise.resolve(undefined),
    enabled: !!lat && !!long,
  });

  const aiq = data?.[0]?.aiq || null;
  const airquality = aiq !== null ? getAirQuality(aiq) : null;

  return { aiq, airquality, error, isLoading, errorMsg };
};

export const useNewsData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNewsData,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export const useSearchApi = () => {
  const { searchText, setSearchText } = useSearchStore();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => performWebSearch(searchText),
    enabled: false,
  });

  const searchQuery = () => {
    if (searchText.trim() === "") {
      console.error("Search text cannot be empty.");
      return;
    }
    refetch();
  };

  const results = data?.result || [];
  console.log({ results, searchText });
  return { searchQuery, results, isLoading, error };
};
