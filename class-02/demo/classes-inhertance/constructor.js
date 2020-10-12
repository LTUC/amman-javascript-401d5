'use strict';



function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log('Walking');
}

function Dog(name) {
    Animal.call(this,name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = () => {
    console.log('WOOF');
};

module.exports = Dog;