// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var connection = require("../config/connection.js");


var Character = connection.define("character", {
    routeName: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
    forcePoints: {
        type: Sequelize.INTEGER
    }
});

Character.sync();

module.exports = Character;