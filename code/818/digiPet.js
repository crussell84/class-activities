const cLog = console.log;

function DigitalPal(name) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.name = name;

    this.says = this.name + " says: ";

    this.feed = function () {
        if (this.hungry) {
            cLog(`${this.says}That was yummy!`);
            this.hungry = false;
            this.sleepy = true;
        } else {
            cLog(`${this.says}No thanks! I'm full!`);
        }
    };

    this.sleep = function () {
        if (this.sleepy) {
            cLog(`${this.says}ZZZZZzzzzzzzz...`);
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            cLog(`${this.says}No way! I'm not sleepy!`);
        }
    };

    this.play = function () {
        if (this.bored) {
            cLog(`${this.says}Yay! Let's play!`);
            this.bored = false;
            this.hungry = true;
        } else {
            cLog(`${this.says}Not right now. Later?`);
        }
    };

    this.increaseAge = function () {
        this.age++;
        cLog(`${this.says}Happy Birthday to me! I am ${this.age} old!`);
    }
}

var animals = {};

animals.dog = new DigitalPal("Spot");
animals.dog.outside = false;
animals.dog.bark = function () { cLog(`${this.says}Woof! Woof! woof!`); };
animals.dog.goOutside = function () {
    if (this.outside) {
        cLog(`${this.says}We're already outside though...`);
    } else {
        cLog(`${this.says}Yay! I love the outdoors!`);
        this.outside = true;
        this.bark();
    }
};
animals.dog.goInside = function () {
    if (this.outside) {
        cLog(`${this.says}Do we have to? fine...`);
        this.outside = false;
    } else {
        cLog(`${this.says}I'm already inside...`);
    }
};

animals.cat = new DigitalPal("Fluffy");
animals.cat.houseCondition = 100;
animals.cat.meow = function () { cLog(`${this.says}Mew! Mew! Mew!`) };
animals.cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        cLog(`${this.says}MUAHAHAHAHA! TAKE THAT FURNITURE!`);
        this.bored = false;
        this.sleepy = true;
    } else {
        cLog(`${this.says}Aww, I broke it all already. Buy me more!`);
    }
};
animals.cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    cLog("Are you sure about that?");
};

var animal = process.argv[2];
var method = process.argv[3];
animals[animal][method]();