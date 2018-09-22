module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^[a-z\d\-_\s]+$/i,
        len: [1, 140]
      }
    },
    complete:{ 
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Todo;
};