import { useEffect, useState } from 'react';
import useAPI from '../hook/useAPI';
import WeatherCard from './WeatherCard';
import WeatherHeader from './WeatherHeader';

const CurrentWeather = () => {
  const { data, loading, error } = useAPI();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);

      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3500); 
      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  if (loading) {
    return <p className='text-lg font-medium text-center'>Loading...</p>;
  }

  if (errorMessage) {
    return <p className='text-lg font-medium text-center'>{errorMessage}</p>;
  }

  if (!data) {
    return null;
  }

  const { name, sys, wind, main, weather } = data;
  const local = `${name}, ${sys.country}`;
  const weatherInfo = [
    { name: 'Wind', value: wind.speed },
    { name: 'Humidity', value: main.humidity }
  ];
  const weatherHeader = {
    temp: main.temp,
    cond: weather[0].description,
    icon: weather[0].icon
  };

  return (
    <>
      <WeatherHeader local={local} weatherHeader={weatherHeader} />
      <ul className='flex flex-col gap-[8px]'>
        {weatherInfo.map((info, index) => (
          <li key={index}>
            <WeatherCard info={info.name} value={info.value} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CurrentWeather;
