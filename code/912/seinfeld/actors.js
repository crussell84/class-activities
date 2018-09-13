// Dependencies
var express = require("express");
var mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "knitgameplay",
    database: "seinfeld_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

app.get("/cast", function (req,response) {
    var html = "<h1>Cast</h1>";
    connection.query(`SELECT * FROM actors order by id`, function (err, res) {
        if (err) throw err;
        html += "<ul>";

        res.forEach(function (element) {
            html += "<li><p> Name: " + element.name + "</p>";
            html += "<p>Coolness: " + element.coolness_points + " </p>";
            html += "<p>Attitude: " + element.attitude + " </p></li>";
        });

        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        response.send(html);
    });

});

app.get("/coolness-chart", function (req, response) {
    var html = "<h1>Coolness</h1>";
    connection.query(`SELECT * FROM actors order by coolness_points`, function (err, res) {
        if (err) throw err;
        html += "<ul>";

        res.forEach(function (element) {
            html += "<li><p> Name: " + element.name + "</p>";
            html += "<p>Coolness: " + element.coolness_points + " </p>";
            html += "<p>Attitude: " + element.attitude + " </p></li>";
        });

        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        response.send(html);
    });
})

app.get("/attitude-chart/:type", function (req, response) {
    var html = "<h1>Coolness</h1>";
    var attitude = req.params.type;
    connection.query(`SELECT * FROM actors WHERE attitude = '${attitude}'`, function (err, res) {
        if (err) throw err;
        html += "<ul>";

        res.forEach(function (element) {
            html += "<li><p> Name: " + element.name + "</p>";
            html += "<p>Coolness: " + element.coolness_points + " </p>";
            html += "<p>Attitude: " + element.attitude + " </p></li>";
        });

        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        response.send(html);
    });
})