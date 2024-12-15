import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchWeather = async (q: string) => {
  const response = await axios.get(
    `https://${process.env.EXPO_PUBLIC_WEATHER_API_HOST}/current.json`,
    {
      params: { q: q },
      headers: {
        "x-rapidapi-key": `${process.env.EXPO_PUBLIC_RAPID_API_KEY}`,
        "x-rapidapi-host": `${process.env.EXPO_PUBLIC_WEATHER_API_HOST}`,
      },
    }
  );
  return response.data;
};

export const fetchAiq = async (lat: string, long: string) => {
  try {
    const response = await axios.get(
      `https://${process.env.EXPO_PUBLIC_AIR_QUALITY_API_HOST}/current/airquality?lon=${long}&lat=${lat}`,
      {
        params: {},
        headers: {
          "x-rapidapi-key": `${process.env.EXPO_PUBLIC_RAPID_API_KEY}`,
          "x-rapidapi-host": `${process.env.EXPO_PUBLIC_AIR_QUALITY_API_HOST}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    throw error;
  }
};

export const fetchNewsData = async () => {
  try {
    const response = await axios.get(
      `https://${process.env.EXPO_PUBLIC_NEWS_API_HOST}/v1/geolocation`,
      {
        params: {
          country: "in",
          language: "en",
          location: "india",
        },
        headers: {
          "x-rapidapi-key": `${process.env.EXPO_PUBLIC_RAPID_API_KEY}`,
          "x-rapidapi-host": `${process.env.EXPO_PUBLIC_NEWS_API_HOST}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};

export const performWebSearch = async (query: string) => {
  try {
    const response = await axios.post(
      `https://${process.env.EXPO_PUBLIC_WEB_SEARCH_HOST}/websearch`,
      {
        text: query,
        safesearch: "off",
        timelimit: "",
        region: "wt-wt",
        max_results: 10,
      },
      {
        headers: {
          "x-rapidapi-key": `${process.env.EXPO_PUBLIC_RAPID_API_KEY}`,
          "x-rapidapi-host": `${process.env.EXPO_PUBLIC_WEB_SEARCH_HOST}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error performing web search:", error);
    throw error;
  }
};
