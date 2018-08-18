const cLog = console.log;
function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = parseInt(age);
    this.strength = parseInt(strength);
    this.hitPoints = parseInt(hitPoints);

    this.printStats = function () {
        console.log(`~~~~Character Sheet~~~~\nName: ${this.name}\nProfession: ${this.profession}\nAge: ${this.age}\nGender: ${this.gender}\nStrength: ${this.strength}\nHit Points: ${this.hitPoints}`);
    };

    this.isAlive = function () {
        if (this.hitPoints > 0) {
            console.log(`${this.name} is alive!`);
        }
        console.log(`${this.name} is dead!`);

    };

    this.attack = function (target) {
        if (target.hitPoints > 0) {
            target.hitPoints = target.hitPoints - this.strength;
            console.log(`${this.name} attacks ${target.name} for ${this.strength} damage!\n${target.name} has ${target.hitPoints} health remaining!`);
        } else {
            console.log(`${target.name} is dead! Stop beating the body!`);
        }
    };

    this.levelUp = function () {
        this.age++;
        this.strength = this.strength + 5;
        this.hitPoints = this.hitPoints + 25;
        this.printStats();
    };

};

const toTheDeath = function(attacker, defender) {
    do {
        defender.hitPoints = defender.hitPoints - attacker.strength;
        cLog("---------------")
        cLog(attacker.name + " attacks " + defender.name + " for " + attacker.strength + " !");
        cLog(defender.name + " now has " + defender.hitPoints + " remaining!");
        cLog("--------------");
        attacker.hitPoints = attacker.hitPoints - defender.strength;
        cLog("---------------")
        cLog(defender.name + " attacks " + attacker.name + " for " + defender.strength + " !");
        cLog(attacker.name + " now has " + attacker.hitPoints + " remaining!");
        cLog("--------------");
        if(attacker.hitPoints <= 0) {
            cLog(attacker.name + " has been defeated!");
        }
        else if (defender.hitPoints <= 0 && attacker.hitPoints > 0) {
            cLog(attacker.name + " has been defeated!");
        }
    }
    while(attacker.hitPoints > 0 && defender.hitPoints > 0);
}

var jane = new Character("Jane", "Wizard", "Female", 21, 10, 12);
var bob = new Character("Bob", "Warrior", "Male", 18, 20, 25);

jane.printStats();
bob.printStats();
jane.levelUp();
bob.levelUp();
toTheDeath(jane, bob);
bob.attack(jane);