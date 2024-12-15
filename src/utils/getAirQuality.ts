export const getAirQuality = (airQuality: number) => {
  if (airQuality > 0 && airQuality <= 50) return "Good";
  if (airQuality > 50 && airQuality <= 100) return "Moderate";
  if (airQuality > 100 && airQuality <= 200) return "Poor";
  if (airQuality > 200 && airQuality <= 300) return "Unhealthy";
  if (airQuality > 300 && airQuality <= 400) return "Severe";
  if (airQuality > 400) return "Hazardous";
  return "Not Found";
};
