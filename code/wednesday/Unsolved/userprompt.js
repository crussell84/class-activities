// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        },
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "list",
            message: "I prefer...",
            choices: ["Coffee", "Tea", "Whisky"],
            name: "beverages"
        },
        {
            type: "checkbox",
            message: "Do you like..?",
            choices: ["Cake", "Pie"],
            name: "dessert"
        }

    ]).then(function(response){
        if (response.confirm) {
            console.log("\nWelcome " + response.username);
            console.log("Your " + response.beverages + " is ready!");
            console.log("Your " + response.dessert + " is ready!\n");
          }
          else {
            console.log("\nThat's okay " + response.username + ", come again when you are more sure.\n");
          }
        });
    