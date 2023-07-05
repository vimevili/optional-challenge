import {useEffect, useState} from 'react';

function useFetch() {
 
  const [data, setData] = useState<JSON>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState<string>('');
  const [lon, setLon] = useState<string>('');

  
  function success(pos: GeolocationPosition) {    
    setLat(pos.coords.latitude.toString());
    setLon(pos.coords.longitude.toString());
  }
  
  
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(success);
 
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=507e586a5068f215a819728177b690f1&units=metric`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError('Houve um erro ao solicitar os dados');
      }
      setLoading(false);
    };
    fetchData();
  }, [lat, lon]);
  console.log(data);

return { data, error, loading};

}

export default useFetch;
