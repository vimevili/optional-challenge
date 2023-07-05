import './App.css'
import CurrentWeather from './components/weather/CurrentWeather'
import Header from './components/Header'

function App() {

  return (
    <div className='container bg-gradient'>
      <Header />
      <CurrentWeather />
    </div>
  )
}

export default App
