function fetchData(){
    return new Promise(function(resolve, reject){
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
    .then(response => response.json())
    .then(data => resolve(data.properties.periods[1].shortForecast));
})
}

function displayData(weather){
    console.log(weather)
}

fetchData()
.then(displayData)