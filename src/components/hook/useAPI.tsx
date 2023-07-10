import { useEffect, useState } from 'react';
import axios from 'axios';

const useAPI = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  interface Position {
    latitude: number,
    longitude: number
  }

  useEffect(() => {
    const fetchData = async () => {
      const getPosition = () => {
        return new Promise<Position>((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude });
              },
              (error) => {
                reject(error);
              }
            );
          } else {
            reject(new Error('Geolocation is not supported by this browser.'));
          }
        });
      };

      try {
        const position = await getPosition();
        const apiKey = '507e586a5068f215a819728177b690f1';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${apiKey}&units=metric`;

        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error retrieving weather data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useAPI;
