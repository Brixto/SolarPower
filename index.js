const ip = "http://192.168.1.13"
const api = "/solar_api/v1/GetSensorRealtimeData.cgi"
const URL = ip + api

console.log('started with api', URL);

function queryApi() {
    console.log('query api');
    req();
}

function req() {
    var request = require('request');
    request(URL, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
}

setInterval(queryApi, 1000 * 60) // 1 sec * 60 == 1 minute
