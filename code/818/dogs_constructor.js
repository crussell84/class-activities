function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function () {
        if (this.raining) {
            console.log(this.noise);
        }
    };
}

let dogs = new Animal(true, "Woof!");
let cats = new Animal(false, "Mew!");

const massHysteria = function (animal, otherAnimal) {
    if (animal.raining && otherAnimal.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
massHysteria(dogs, cats);