//GET WEATHER NEX DAYS
async function getWeatherNext(latitude, longitude, key) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}lon=${longitude}&appid=${key}`)
  const jsonData = await response.json()
  return jsonData
}
//GET WEATHER TODAY
async function getWeatherNow(latitude, longitude, key) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&units=metric&lon=${longitude}&appid=${key}`)
  const jsonData = await response.json()
  return jsonData
}
//GET POSITION
async function navigation() {
  return new Promise((resolve,reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}
//FOR DATE
export const days = {
  1:'Monday',
  2:'Tuesday',
  3:'Wednesday',
  4:'Thursday',
  5:'Friday',
  6:'Saturday',
  7:'Sunday'
}

//FOR WEATHER INFO
export const weatherIcons = {
  '01d': 'clearSkyDay',
  '02d': 'fewCloudsDay',
  '03d': 'scatteredCloudsDay',
  '04d': 'brokenCloudsDay',
  '09d': 'showerRainDay',
  '10d': 'rainDay',
  '11d': 'thunderstormDay',
  '13d': 'snowDay',
  '50d': 'mistDay',
  '01n': 'clearSkyNight',
  '02n': 'fewCloudsNight',
  '03n': 'scatteredCloudsNight',
  '04n': 'brokenCloudsNight',
  '09n': 'showerRainNight',
  '10n': 'rainNight',
  '11n': 'thunderstormNight',
  '13n': 'snowNight',
  '50n': 'mistNight'
}
export async function getWeather() {
  const key = "a658ba0845604c764bdb36bd3ed9b4b6";
  const position = await navigation();
  const weatherNow = await getWeatherNow(position.coords.latitude, position.coords.longitude, key);
  console.log(weatherNow);
  return (weatherNow);
}