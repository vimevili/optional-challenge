
const WeatherCard = (info, value) => {
  return (
    <div className="flex bg-white-36 items-center justify-content-center">
      <img src={info==='Wind' ? 'src\assets\img\wind.svg' : 'src\assets\img\humidity.svg'} alt="" className="inline"/>
       <p className="font-inter font-bold text-xl inline">
        {info}
        </p>
       <p>
        {info==='Wind' ? value+'km/h' : value+'%'}
        </p>
    </div>
  )
}

export default WeatherCard
