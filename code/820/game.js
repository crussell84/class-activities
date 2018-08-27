var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = parseInt(offense);
    this.defense = parseInt(defense);
    this.goodGame = function (flip) {
        //will increase either offense or defense based on coinflip
        if (flip === 1) {
            this.offense++;
        } else {
            this.defense++;
        }
    };
    this.badGame = function (flip) {
        //will decrease either offense or defense based on coinflip
        if (flip === 1) {
            this.offense--;
        } else {
            this.defense--;
        }
    };
    this.printStats = function () {
        console.log(`Name: ${this.name} \nPosition: ${this.position} \nOffense: ${this.offense} \nDefense: ${this.defense}`);
    }
}
var coinFlip = function () {
    var result = Math.random() * 2;
    return result;
}

var count = 1;
var team = [];
var starters = [];
var subs = [];
var roundNumber = 0;
var maxRounds = 5;

var createPlayers = function () {

    if (count < 4) {
        inquirer.prompt([
            {
                name: "name",
                message: "Player Name (" + count + " of 3):"
            }, {
                name: "position",
                message: "Player Position:"
            },
            {
                name: "offense",
                message: "Offense Rating (1-10):"
            },
            {
                name: "defense",
                message: "Defense Rating (1-10):"
            }
        ]).then(function (answers) {
            var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
            team.push(newPlayer);
            if (count < 3) {
                starters.push(newPlayer);
            } else {
                subs.push(newPlayer);
            }
            count++;
            createPlayers();
        });

    } else {
        console.log("Team is full!");
        team.forEach(function (element) {
            element.printStats();
            console.log("~~~~~~~");
        });

        playGame();
        // POC of coinflip & good/badgame methods
        // team[0].goodGame(coinFlip());
    }
}

function playGame() {
    var score = 0;
    if (roundNumber < maxRounds) {
        var rand1 = Math.random() * 20;
        var rand2 = Math.random() * 20;

        if (rand1 < (starters[0].offense + starters[1].offense)) {
            score++;
        }

        if (rand2 > (starters[0].defense + starters[1].defense)) {
            score--;
        }

        inquirer.prompt([
            { name: "switch", type: "confirm", message: "Switch in the sub?" }])
            .then(function (answers) {
                if (answers.confirm) {
                    inquirer
                        .prompt([{ name: "player", type: "confirm", message: "Y to swap out player 1, N to swap out player 2" }])
                        .then(function (answers) {
                            if (answers.confirm) {
                                var swap = starters[0];
                                starters[0] = subs[0];
                                subs[0] = swap;
                            } else {
                                var swap = starters[1];
                                starters[1] = subs[0];
                                subs[0] = swap;
                            }
                        })
                }

            })

    } else {
        var win = true;
        if (score > 0) {
            starters.forEach(goodGame(coinFlip()));
        } else if (score < 0) {
            starters.forEach(badGame(coinFlip()));
            win = false;
        }
        if (win) {
            console.log(`You won! Your total score is ${score}.`)
        } else {
            console.log(`You lost! Your total score is ${score}`);
        }
        console.log("Updated starter stats:");
        starters.forEach(function (element) {
            element.printStats();
        });
        inquirer.prompt([{
            name: "again",
            type: "confirm",
            message: "Play again?"
        }]).then(function (answers) {
            if (answers.confirm) {
                playGame();
            } else {
                console.log("Good bye!");
            }
        })
    }


}

createPlayers();