
const WeatherCard = ({info, value}) => {
  const windInKm = Math.round(value * 3.6)
  return (
    <div className="grid grid-cols-[auto_2fr_1fr] gap-[8px] bg-white-36 items-start px-[20px] py-[15px] rounded-[10px] max-w-[90%] mx-auto my-0 text-bs">
      <img src={info==='Wind' ? 'src/assets/img/wind.svg' : 'src/assets/img/humidity.svg'} alt="" className="block"/>
       <p>
        {info}
        </p>
       <p className="text-end">
        {info==='Wind' ? windInKm+'km/h' : value+'%'}
        </p>
    </div>
  )
}

export default WeatherCard
