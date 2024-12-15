const getDayOrNight = (time: string) => {
  // Parse the input time
  const date = new Date(time);

  if (isNaN(date.getTime())) {
    throw new Error(
      "Invalid time format. Please provide a valid datetime string."
    );
  }

  // Get the hours from the time
  const hours = date.getHours();

  // Determine "day" or "night" based on the hours
  if (hours >= 6 && hours < 18) {
    return "day";
  } else {
    return "night";
  }
};

export default getDayOrNight;
