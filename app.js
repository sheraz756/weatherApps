function getWeather() {
// let temp=document.querySelector(".temp-icon");
    let cityName = document.getElementById("cityName").value;

    axios.get(`http://api.weatherapi.com/v1/current.json?key=800c96f977804631917134651222907&q=${cityName}&aqi=no`)
        .then(function (response) {

            let weatherData = response.data;
            document.querySelector("#result").innerHTML=weatherData.current.temp_c+"<sup>°C</sup>";
            document.querySelector("#result1").innerHTML=+weatherData.current.temp_f+"<sup>°F</sup>";
            document.querySelector("#result2").innerHTML=cityName;
            document.querySelector("#result3").innerHTML="Humidity:"+weatherData.current.humidity;
            document.querySelector("#result4").innerHTML="Time:"+weatherData.location.localtime;
            document.querySelector("#result5").innerHTML="clouds:"+weatherData.current.condition.text;
            document.querySelector("#result6").innerHTML="wind speed:"+weatherData.current.wind_kph;
            document.querySelector("#result7").innerHTML="Feels like:"+weatherData.current.feelslike_c;
            let temp=document.querySelector("#temp-icon");
            if(temp<300 && temp>200)
            {
                temp.src="sun.png"
            }
            else if(temp<500 && temp>400)
            {
                temp.src="snow.png"
            }
            else if(temp<600 && temp>500)
            {
                temp.src="cloudy.png"
            }
            else if(temp<700 && temp>600)
            {
                temp.src="sthunderstrom.png"
            }

            else if(temp<800 && temp>700)
            {
                temp.src="sthunderstrom.png"
            }
           else if(temp===900)
            {
                temp.src="sthunderstrom.png"
            }

            console.log(weatherData);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        
}