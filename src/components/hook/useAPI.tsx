import {useEffect, useState} from 'react'
import axios from 'axios'

const useAPI = () => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean | string>(false);
    const [lat, setLat] = useState<string>();
    const [lon, setLon] = useState<string>();

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition((pos) => {
            setLat(pos.coords.latitude.toString());
            setLon(pos.coords.longitude.toString());
        });
    
        return () => {
            navigator.geolocation.clearWatch(watchId);
          };    
    }, [])

    useEffect(() => {
      const fetchData = async () => {

        const apiKey = '507e586a5068f215a819728177b690f1'
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&metric`;
        setLoading(true);

        try {
          setData((await axios.get(url)).data);
        } catch (error) {
          setError('Não foi possível localizar uma cidade válida');
        }
        setLoading(false);
      };
      if (lat !== '' && lon !== '') {
        fetchData();
      }
    }
    , [lat, lon]);

    return {data, loading, error}
}

export default useAPI
