var request = require("request");
var fs = require("fs");

var findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var data = JSON.parse(body);
        var log = `Name: ${data.name}\nGenres: ${data.genres}\nAvg. Rating: ${data.rating.average}\nNetwork: ${data.network.name}\nSummary: ${data.summary}\n`;
        fs.appendFile("./log.txt", log, function(err){ 
          if (err) throw err;
          console.log(log);});
        
      }
    })
  }

  var findActor = function(actor){
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var data = JSON.parse(body);
        var log = `Name: ${data[0].person.name}\nBirthday: ${data[0].person.birthday}\nGender: ${data[0].person.gender}\nCountry: ${data[0].person.country.name}\nURL: ${data[0].person.url}\n`;
        fs.appendFile("./log.txt", log, function(err){ 
          if (err) throw err;
          console.log(log);});
        
      }
    })
  }




module.exports = {findShow: findShow, findActor: findActor};
