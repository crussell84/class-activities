// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7500;
var PORT2 = 7000;

// Create a generic function to handle requests and responses
function somethingGood(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Something good.");
}

function somethingBad(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Something bad.");
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(somethingBad);
var server2 = http.createServer(somethingGood);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://classvm.local:" + PORT);
});

server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://classvm.local:" + PORT2);
  });