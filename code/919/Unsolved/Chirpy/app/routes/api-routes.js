// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/", function(req, res) {
  console.log("all chirps");
});

  // Add a chirp
app.post("/api/new", function(req, res){
  connection.query("INSERT INTO chirps (author, chirp, chirped) VALUES (?)", [req.body], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
})

};
