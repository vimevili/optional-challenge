const WeatherHeader = ({city}) => {

    const dataFormatada = new Date().toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div>
      <h1>{city}</h1>
      <p>{dataFormatada}</p>
    </div>
  )
}

export default WeatherHeader
