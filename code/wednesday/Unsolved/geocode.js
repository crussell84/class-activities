var geocoder = require("geocoder");
var input = process.argv;
var address = input[2];

geocoder.geocode(address, function(error, data) {
    console.log(JSON.stringify(data, null, '\t'));
});