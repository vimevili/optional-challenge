import WeatherCard from '../UI/WeatherCard';
import useFetch from '../hook/useFetch'
import WeatherHeader from './WeatherHeader';

const CurrentWeather = () => {
  const {data} = useFetch();
  console.log(data);
  const local = data.name + ', ' + data.sys.country;

  return (
    <>
    <WeatherHeader city={local} />
      {<WeatherCard />}
    </>
  )
}

export default CurrentWeather
