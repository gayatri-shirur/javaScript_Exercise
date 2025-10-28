function fetchData(){                  //Declares a function named fetchData. This function's purpose is to initiate the asynchronous network request and return a Promise that resolves with the final weather data.
    return new Promise(function(resolve, reject){   //Creates and returns a new Promise. This custom Promise will wrap the complexity of the fetch operation. It receives two functions: resolve (to call upon success) and reject (to call upon failure).
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast') //Starts the asynchronous network request. The fetch function immediately sends an HTTP request to the weather API URL. It returns a native Promise (internal to fetch).
    .then(response => response.json())                        //First Success Handler. When the native fetch Promise resolves with a raw Response object, this function is called. It immediately calls response.json(), which reads the body of the response and returns a new Promise that will resolve with the parsed JavaScript object.
    .then(data => resolve(data.properties.periods[1].shortForecast));  //Second Success Handler. This function runs after the JSON data is successfully parsed. It extracts a specific piece of data: the shortForecast from the second period. It then calls the outer custom Promise's resolve function (from line 2) with this specific string value. This fulfills the custom Promise.
})
}

function displayData(weather){  //Declares a function that expects a single argument, which is destructured and named weather. This function is intended to consume the result of the Promise.
    console.log(weather)  //Prints the value of the weather variable to the console.
}

fetchData()  //Calls the fetchData function. This starts the entire asynchronous process and returns the custom Promise object.
.then(displayData)  //Attaches the success handler. This tells the custom Promise: "When you successfully resolve (i.e., when line 5 calls resolve), execute the displayData function and pass the resolved value (the forecast string) as its argument."