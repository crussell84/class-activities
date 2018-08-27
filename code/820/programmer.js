function Programmer (name, title, age, language) {
    this.name = name;
    this.title = title;
    this.age = parseInt(age);
    this.language = language;

    this.printInfo = function() {
        console.log(`Name: ${this.name} \nTitle: ${this.title} \nAge: ${this.age} \nFav Language: ${this.language}`)
    }
}

var chris = new Programmer("Chris", "Code Goddess", 34, "Javascript");

chris.printInfo();
