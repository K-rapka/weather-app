async function getWeatherNow(key){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${key}`)
    const jsonData = await response.json()
    return jsonData
}
async function getWeatherNext(key){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=41.39&units=metric&lon=2.15&appid=${key}`)
    const jsonData = await response.json()
    return jsonData
} 
async function navigation(){
    await navigator.geolocation.getCurrentPosition((position)=>console.log(position))
} 
export async function getWeather(){
    const key = "a658ba0845604c764bdb36bd3ed9b4b6"
    const weatherNow = await getWeatherNow(key);
    const weatherNext = await getWeatherNext(key);
    console.log(weatherNow);
    console.log(weatherNext);
    return([weatherNow,weatherNext])
}

