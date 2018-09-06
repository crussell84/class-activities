// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  var path = req.url;
  var file = "";

  switch (path) {
    case "/" :
    file = "/index.html";
    console.log(file);
    break;

    case "/favcss.html":
    file = "/favcss.html";
    break;

    case "/favmovies.html":
    file = "/favmovies.html";
    break;

    case "/favfoods.html":
    file = "/favfoods.html";
    break;

  }

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + file, function(err, data) {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
