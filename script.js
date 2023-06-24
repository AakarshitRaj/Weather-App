// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a6016b8d58msh71a435b09d2852cp14b299jsn3400c2a72395',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather =(city="Delhi")=>{
  cityName.innerHTML = city;
async function fetchData() {
  try {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
    const data = await response.json(); // Parse the response as JSON
    console.log(data);
   // document.getElementById('cloud_pct').textContent = data.cloud_pct;
    document.getElementById('temp').textContent = data.temp;
    document.getElementById('temp2').textContent = data.temp;
    document.getElementById('feels_like').textContent = data.feels_like;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('humidity2').textContent = data.humidity;
    document.getElementById('min_temp').textContent = data.min_temp;
    document.getElementById('max_temp').textContent = data.max_temp;
    document.getElementById('wind_speed').textContent = data.wind_speed;
    document.getElementById('wind_speed2').textContent = data.wind_speed;
    document.getElementById('wind_degrees').textContent = data.wind_degrees;
    document.getElementById('sunrise').textContent = data.sunrise;
    document.getElementById('sunset').textContent = data.sunset;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
}

submit.addEventListener("click",(e)=>{
  e.preventDefault() /*to avoid loading*/
  getWeather(city.value)
})

getWeather("Delhi")