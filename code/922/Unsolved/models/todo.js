// const Sequelize = require('sequelize');
// const db = require('./index');

// var Todo = db.define("todo", {
//     text: {
//         type: Sequelize.STRING
//     },
//     complete: {
//         type: Sequelize.BOOLEAN
//     }
// });

module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };