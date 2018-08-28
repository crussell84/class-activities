var mysql = require("mysql");
var command = process.argv[2];
// var term = process.argv[3];

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "knitgameplay",
  database: "music_data"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  switch (command) {
    case "read":
      readData();
      break;

    case "delete":
      deleteData();
      break;

    case "create":
      createData();
      break;

    case "update":
      updateData();
      break;
  }

  connection.end();
});

function readData() {
  connection.query(`SELECT * FROM song_data`, function (err, res) {
    if (err) throw err;
    res.forEach(function (element) {
      console.log("Title: " + element.title);
      console.log("Artist: " + element.artist);
      console.log("Genre: " + element.genre);
      console.log('~~~')
    });
    ;
  })
}

function createData() {
  var sql = `INSERT into song_data (title, artist, genre) VALUES ?`;
  var values = [["Strawberry Fields", "The Beatles", "Classic Rock"], ["Hey Jude", "The Beatles", "Classic Rock"], ["Yellow Submarine", "The Beatles", "Classic Rock"]];
  connection.query(sql, [values], function (err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " songs added!");
  })
}

function updateData() {
  var sql = `UPDATE song_data SET genre = "Rock" WHERE genre = "Classic Rock"`;
  connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " songs updated!");
  })
}

function deleteData() {
  var sql = `DELETE FROM song_data WHERE artist = "The Beatles"`;
  connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " songs deleted!");
  })
}