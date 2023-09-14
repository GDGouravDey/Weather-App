const apiKey="00bbb7f3ffa3d510c5dedf8aa3531a41";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var k=1;
if(k===1) {
    checkWeather("Kolkata");
    k=0;
}
const searchBox = document.querySelector(".cityname");
const searchBtn = document.querySelector(".search_button");
async function checkWeather(city){
    const response = await fetch(apiurl+city+"&appid="+apiKey);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
}
searchBtn.addEventListener("click", ()=>{
    alert('Please wait...');
})