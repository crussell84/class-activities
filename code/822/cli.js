let data = process.argv;
let input = data.slice(2);
let search = input.shift();
let term = input.join(" ");
let tv = require("./tv.js");


if (!search) {
    search = "show";
}

if (!term) {
    switch (search) {
        case "show":
            search = "Good+Eats";
            break;
        case "actor":
            search = "Alton+Brown";
            break;
    }
}

switch (search) {
    case "show":
        console.log("Searching for a show!");
        tv.findShow(term);
        break;
    case "actor":
        console.log("Searching for an actor!");
        tv.findActor(term);
        break;
    default:
        console.log("Invalid input, please enter either 'show' or 'actor' to begin searching.");
        break;
} 