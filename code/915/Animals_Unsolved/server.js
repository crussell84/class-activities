var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function (req, res) {
  var dog =[];
  animals.forEach(function (element) {
    if (element.animalType === "dog") {
      dog.push(element);
    }
  });
  res.render("dog", {
    dog: dog
  });

});

app.get("/all-pets", function (req, res) {
// es6 version
  pets.animals = animals.filter(elem => elem.pet);
  var pets = [];
  animals.forEach(function (element) {
    if (!element.pet) {
      pets.push(element);
    }
  });
  res.render("index", {
    animals: pets
  });
});

app.get("/all-non-pets", function (req, res) {
  var nonPets = [];
  animals.forEach(function (element) {
    if (!element.pet) {
      nonPets.push(element);
    }
  });
  res.render("index", {
    animals: nonPets
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
