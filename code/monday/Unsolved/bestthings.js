// fs is a core Node package for reading and writing files
var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  var dataArr = data.split(",");

  dataArr.forEach(function(ele) {
      console.log(ele);
  });

});