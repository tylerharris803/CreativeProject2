document.getElementById("nbaSubmit").addEventListener("click", function(event){
  event.preventDefault();
  const value = document.getElementById("nbaID").value;
  if (value === "")
  return;
console.log(value);

const nbaurl = "https://www.balldontlie.io/api/v1/teams/" + value;
fetch(nbaurl)
  .then(response => response.json())
  .then(function(json){
    let result = "";
    result += '<p> Abbreviation: ' + json.abbreviation + '</p>'
    result += '<p> City: ' + json.city + '</p>'
    result += '<p> Conference: ' + json.conference + '</p>'
    result += '<p> Division: ' + json.division + '</p>'
    result += '<p> Full Name: ' + json.full_name + '</p>'

    document.getElementById("nbaResult").innerHTML = result;
  });
});


function clickJoke(){
  let jokeurl = "https://official-joke-api.appspot.com/random_joke"
  fetch(jokeurl)
  .then(response => response.json())
  .then(function(json){
    let result = "";
    result += '<p>' + json.setup + '</p>'
    result += '<p>' + json.punchline + '</p>'
    document.getElementById("jokeResult").innerHTML = result;
  });
}



document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=80d42cfccafd620a25a8ae583ed686d4";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Weather in ' + json.name + "</h2>";
      for (let i = 0; i < json.weather.length; i++) {
        results += '<img2 src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>Humidity: " + json.main.humidity + "%</p>";
      results += "<p>Wind: " + json.wind.speed + " MPH</p>";
      results += "<p>"
      for (let i = 0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    });
  });
