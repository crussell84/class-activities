const dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

const cats = {
    raining: false,
    noise: "Mew!",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

const massHysteria = function (animal, otherAnimal) {
    if (animal.raining && otherAnimal.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
massHysteria(dogs, cats);