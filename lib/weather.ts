export async function getWeather(): Promise<{
  temp: null | number;
}> {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const lat = 51.5074;
    const lon = -0.1278;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(url).then((res) => res.json());

    return {
      temp: kelvinToCelsius(response.current.temp),
    };
  } catch (error) {
    console.error("Failed to retrieve subscriptions:", error);
    return {
      temp: null,
    };
  }
}

function kelvinToCelsius(kelvin: number): number {
  return Math.round((kelvin - 273.15) * 10) / 10;
}

interface WeatherResponse {
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<any>;
  };
}
