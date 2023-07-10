const WeatherHeader = ({local, weatherHeader}) => {

  const dataFormatada = new Date().toLocaleString('en-US', 
  { weekday: 'short', month: 'short', day: 'numeric' });
  const temp = Math.round(weatherHeader.temp);
  const cond = weatherHeader.cond
  const weatherIcon = weatherHeader.icon
  const url = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`

  return (
    <div className="flex flex-col h-fit">
      <div className="pl-[1.5rem]">
        <h1 className="text-lg font-medium max-w-[8ch] py-[.7rem] leading-7">{local}</h1>
        <p className="text-sm text-grey font-medium">{dataFormatada}</p>
      </div>
      <div className="grid grid-cols-[1fr_1fr] mx-auto my-0 items-center">
        <img src={url} alt="" className="p-3 pr-0"/>
        <div className="flex flex-col flex-wrap p-3 pl-0">
          <p className="text-xl font-bold leading-10 pb-1">{temp}<span className="text-bs align-top font-normal leading-4">ºC</span></p>
          <p>{cond}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherHeader
