var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "knitgameplay",
    database: "great_bay"
});

connection.connect(function (err) {
    if (err) throw err;
});

function createData(values) {
    var sql = `INSERT into listings (name, startingBid, listedBy, currentBid) VALUES ?`;
    connection.query(sql, [[values]], function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " item added!");
    })
}



function listItem() {
    var values = [];
    inquirer.prompt([{ name: "name", message: "What is the item name?", type: "input" }]).then(function (answer) {
        values.push(answer.name);
        inquirer.prompt([{ name: "startingBid", message: "Starting Bid", type: "input" }]).then(function (answer) {
            values.push(answer.startingBid);
            inquirer.prompt([{ name: "listedBy", message: "Your username", type: "input" }]).then(function (answer) {
                values.push(answer.listedBy);
                values.push("0.00");
                console.log(values);
                createData(values);
            })
        })
    })
}
function bidOnItem() {
    connection.query(`SELECT * FROM listings`, function (err, res) {
        if (err) throw err;
        //   console.log(res);
        var listedItems = [];
        res.forEach(function (element) {
            listedItems.push(element.id + ":" + element.name);
        })
        inquirer.prompt([{ name: "listings", message: "Current listings", type: "list", choices: listedItems }]).then(function (answer) {
            var choice = answer.listings;
            var id = answer.listings.split(":")[0];
            console.log(id);
            inquirer.prompt([{name: "bid", type: "input", message: `How much do you want to bid on ${choice}?`}]).then(function(answer){
                
            })
        })

    })
}

inquirer.prompt([{ name: "options", message: "What would you like to do today?", type: "list", choices: ["List an item", "Bid on an item"] }])
    .then(function (answer) {
        var choice = answer.options;
        switch (choice) {
            case "List an item":
                listItem();

                break;

            case "Bid on an item":
                bidOnItem();
                break;
        }
    })