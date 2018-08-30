var mysql = require("mysql");
var inquirer = require("inquirer");
var searchTerm = "";

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "knitgameplay",
    database: "songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function createJoinedTable() {
    var sql = `SELECT Top5000.artist, Top5000.year, Top5000.title, albums.album
    from albums
    inner join Top5000 ON Top5000.artist=albums.artist AND Top5000.year=albums.year;`

    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}

function artistSearch(input) {
    connection.query(`SELECT * FROM Top5000 WHERE artist like %${input}%`, function (err, res) {
        if (err) throw err;
        res.forEach(function (element) {
            console.log("Title: " + element.title);

        });
        connection.end();
    });
}

function songSearch(input) {
    connection.query(`SELECT * FROM Top5000 WHERE title like %${input}%`, function (err, res) {
        if (err) throw err;
        res.forEach(function (element) {
            console.log(`Position: ${element.position} Artist: ${element.artist} Title: ${element.title} Year: ${element.year} Raw Score: ${element.raw_score} Raw Score(US): ${element.raw_score_US} Row Score(UK): ${element.raw_score_UK} Raw Score(EU): ${element.raw_score_EU} Raw Row: ${element.raw_row}`);
        });
        connection.end();
    });
}

function multipleApperances() {
    var sql = `SELECT count(*), artist
    FROM Top5000
    GROUP BY artist
    HAVING COUNT(*) > 1;`
    connection.query(sql, function (err, res) {
        if (err) throw err;
        var prop = 'count(*)';
        res.forEach(function (element) {
            console.log(element.artist + " appears " + element[prop] + " times!");
        });
        connection.end();
    })
}

function songRange(start, end) {
    var sql = `SELECT * FROM Top5000 LIMIT ${start}, ${end}`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        res.forEach(function (element) {
            console.log(`${element.position} ${element.artist} ${element.title} ${element.year} ${element.raw_score} ${element.raw_score_US} ${element.raw_score_UK} ${element.raw_score_EU} ${element.raw_row}`);

        });
        connection.end();
    })
}

inquirer.prompt([{
    name: "choice",
    type: "list",
    message: "What would you like to do?",
    choices: ["Get all songs by an artist", "Find all artists who are in the top 5000 more than once", "See all songs in a range", "Get information about a specific song"]
}])
    .then(function (answer) {
        //map choice to variable
        switch (answer.choice) {
            case "Get all songs by an artist":

                inquirer.prompt([{ name: "artist", type: "input", message: "What artist do you want to search for?" }])
                    .then(function (answer) {
                        searchTerm = answer.artist;
                        artistSearch(searchTerm);
                    })
                break;

            case "Find all artists who are in the top 5000 more than once":

                multipleApperances();
                break;

            case "See all songs in a range":

                inquirer.prompt([{ name: "rangeStart", type: "input", message: "First record to return" },
                { name: "rangeEnd", type: "input", message: "Last record to return" }]).then(function (answers) {
                    var end = parseInt(answers.rangeEnd) - parseInt(answers.rangeStart) + 1;
                    var start = parseInt(answers.rangeStart) - 1;
                    songRange(start, end);
                })
                break;

            case "Get information about a specific song":

                inquirer.prompt([{ name: "song", type: "input", message: "What song do you want to search for?" }])
                    .then(function (answer) {
                        searchTerm = answer.song;
                        songSearch(searchTerm);
                    })
                break;

        }

    })