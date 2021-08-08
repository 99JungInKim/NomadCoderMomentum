const API_KEY = "bf29a6c0f9083a482087a79a06ae9687";
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);