import {useState, useEffect} from 'react'
import useAPI from '../hook/useAPI';
import WeatherCard from './WeatherCard';
import WeatherHeader from './WeatherHeader';
import axios from 'axios'


const CurrentWeather = () => {
  const [data, setData] = useState<any>('');
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

  interface WeatherInfo {
    name: string;
    value: number;
  }
  type WeatherArray = [WeatherInfo, WeatherInfo]

  const [local, setLocal] = useState<string>();
  const [weatherInfo, setWeatherInfo] = useState<WeatherArray>();

  console.log(data);

  useEffect(() => {
    let city = '';
    let country = ''
    let windSpeed = 0;
    let humidityValue = 0;
    
    if (data) {
      city = data.name;
      country = data.sys.country
      windSpeed = +data.wind.speed;
      humidityValue = +data.main.humidity;
    }

    setLocal( city + ', ' + country);
    setWeatherInfo([
      { name: 'Wind', value: windSpeed},
      { name: 'Humidity', value: humidityValue}
    ])
  }, [data])


  return (
    <>
    {loading && <p>Loading...</p>}
    {data && <WeatherHeader local={local}/>}
    <ul>
      {weatherInfo && weatherInfo.map((info, index) => 
      <li key={index}>
        <WeatherCard 
          info={info.name} 
          value={info.value} 
         />
      </li>)}
    </ul>
    </>
  )
}

export default CurrentWeather
