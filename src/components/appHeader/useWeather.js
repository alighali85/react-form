import { useEffect, useState } from 'react';


export default function useWeather(cityWeatherAPI) {
  const [weather, setWeather] = useState();
  useEffect(() => {
    fetch(cityWeatherAPI)
      .then((res) => res.json()).then((data) => {
        /**
           * due to limate usage of the free plan in openweather
           * the response might return as (too many requests),
           * in this case the response will haven no (name)
           */
        if (data.name) {
          setWeather({
            city: data.name,
            tempreature: Math.round(data.main.temp),
            icon: data.weather[0].icon,
          });
        }
      }).catch(() => setWeather(false));
  }, []);
  return weather;
}
