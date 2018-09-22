// Dependencies
// =============================================================
// Dependencies
// =============================================================


var Sequelize = require("sequelize");

var connection = require("../config/connection.js");
// Require the sequelize library
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration
var Book = connection.define("book", {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    pages: {
        type: Sequelize.INTEGER
    }
});
// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;
