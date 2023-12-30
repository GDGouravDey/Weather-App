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
                if(data.cod == "404")
                    alert("City Not Found");
                else if(data.cod == "400")
                    alert("Please Enter City Name");
                else
                {
                    console.log(data);
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
                    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
                    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
                    var ID = data.weather[0].id;
                    if(ID >= 701 && ID <= 781)
                        document.querySelector(".weather-icon").src = "./images/mist.png";
                    else if(ID >= 801 && ID <= 804)
                        document.querySelector(".weather-icon").src = "images/clouds.png";
                    else if(ID >= 500 && ID <= 531)
                        document.querySelector(".weather-icon").src = "images/rain.png";
                    else if(ID >= 600 && ID <= 622)
                        document.querySelector(".weather-icon").src = "images/snow.png";
                    else if(ID >= 300 && ID <= 321)
                        document.querySelector(".weather-icon").src = "images/drizzle.png";
                    else if(ID >= 200 && ID <= 232)
                        document.querySelector(".weather-icon").src = "images/thunderstorm.png";
                    else
                        document.querySelector(".weather-icon").src = "images/clear.png";
                }
            }
            searchBtn.addEventListener("click", ()=>{
                checkWeather(searchBox.value);
            })
            searchBox.addEventListener("keyup", (event)=>{
                if(event.keyCode === 13)
                    checkWeather(searchBox.value);
            })