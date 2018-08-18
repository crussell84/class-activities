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

var dog = new DigitalPal("Spot");
dog.outside = false;
dog.bark = function () { cLog(`${this.says}Woof! Woof! woof!`); };
dog.goOutside = function () {
    if (this.outside) {
        cLog(`${this.says}We're already outside though...`);
    } else {
        cLog(`${this.says}Yay! I love the outdoors!`);
        this.outside = true;
        this.bark();
    }
};
dog.goInside = function () {
    if (this.outside) {
        cLog(`${this.says}Do we have to? fine...`);
        this.outside = false;
    } else {
        cLog(`${this.says}I'm already inside...`);
    }
};

var cat = new DigitalPal("Fluffy");
cat.houseCondition = 100;
cat.meow = function () { cLog(`${this.says}Mew! Mew! Mew!`) };
cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        cLog(`${this.says}MUAHAHAHAHA! TAKE THAT FURNITURE!`);
        this.bored = false;
        this.sleepy = true;
    } else {
        cLog(`${this.says}Aww, I broke it all already. Buy me more!`);
    }
};
cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    cLog("Are you sure about that?");
};

cat.destroyFurniture();
cat.meow();
dog.goOutside();
cat.play();
cat.sleep();
cat.play();
cat.feed();
cat.buyNewFurniture();
cat.sleep();
cat.play();
cat.buyNewFurniture();
cat.feed();
cat.sleep();
cat.destroyFurniture();
cat.sleep();
cat.play();
cat.feed();
dog.goInside();
dog.play();
dog.feed();
dog.sleep();