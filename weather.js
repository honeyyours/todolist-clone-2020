const weather = document.querySelector(".js-weather");
const API_KEY = "2e640f7786b0bed8cfd008b86bda3535";
const coords = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function getweather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const Temp = json.main.feels_like;
      const MaxTem = json.main.temp_max;
      const MinTem = json.main.temp_min;
      const local = json.name;
      weather.innerText = `온도 ${Temp} 
      최고기온 ${MaxTem}
      최저기온 ${MinTem}
      @ ${local}`;
    });
}

function handleGeoSucces(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const coordsObj = {
    latitude: lat,
    longitude: long,
  };
  saveCoords(coordsObj);
  getweather(lat, long);
}
function handleGeoFail() {
  console.log("can't get Current position");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoFail);
}

function checkweather() {
  const geoweather = localStorage.getItem(coords);
  if (geoweather === null) {
    askForCoords();
  } else {
    const parsedcoords = JSON.parse(geoweather);
    getweather(parsedcoords.latitude, parsedcoords.longitude);
  }
}

function init() {
  checkweather();
}

init();
