
var fs = require("fs");
var transaction = process.argv[2];
var amount = process.argv[3];

function total() {
    fs.readFile("bank.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");
        var total = 0;

        dataArr.forEach(function (ele) {
            var num = parseFloat(ele);
            total += num;
        });
        console.log(total);
    });
}

function logTransaction(amount) {
    fs.appendFile("bank.txt", amount, function (err) {
        if (err) {
            console.log(err);
        }

        else {
            console.log("Content Added!");
        }

    });
}

function deposit() {
    amount = "," + amount;
    logTransaction(amount);
}

function withdraw() {
    amount = ",-" + amount;
    logTransaction(amount);
}

function lotto() {
    var winnings = parseFloat(amount) * 5;
    var lotto = 42;
    withdraw(amount);
    if ((Math.floor(Math.random() * 101)) === lotto) {
        amount = winnings;
        deposit(amount);
        console.log("You're a winner!");
    }
}

switch (transaction) {
    case "total":
        total();
        break;

    case "deposit":
        deposit();
        total();
        break;

    case "withdraw":
        withdraw();
        total();
        break;

    case "lotto":
        lotto();
        total();
        break;

    default:
        console.log("Invalid input, please try again!");
}