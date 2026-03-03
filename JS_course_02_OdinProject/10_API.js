// https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis

// API - Servers that are created for serving data for external use (in websites or apps)
// (api is waiter - we are customer and system is kitchen)

// Making request : https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Junaghadh?unitGroup=us&include=days&key=MGMQ6H4YNAKFU26VJQYRQ2FW9&contentType=json
// API key is Credential (not to share everyone because it give access to use services of APIs)


// Fetching Data : 
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Junaghadh?unitGroup=us&include=days&key=MGMQ6H4YNAKFU26VJQYRQ2FW9&contentType=json", {
    "method": "GET",
    "headers": {
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });


fetch("https://api.giphy.com/v1/gifs/translate?api_key=7CV87UqpI92xcHuV6Sd0MzapOgtfxuOO&s=cats", {
    "method": "GET",
    "headers": {
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });